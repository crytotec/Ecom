// SignUp.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import { FaLocationPinLock } from "react-icons/fa6";
import { useAuth } from './AuthContext'; // Import the Auth context

function SignUp() {
    const [location, setLocation] = useState(null);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate
    const { login } = useAuth(); // Get the login function from context

    const updateSignup = (event) => {
        event.preventDefault(); // Prevent default form submission
        if (email && pwd && confirm) {
            if (pwd === confirm) {
                // Store user data in local storage
                localStorage.setItem('Email', email);
                localStorage.setItem('PWD', pwd);
                login();

                navigate('/'); 
            } else {
                setErrorMessage("Passwords do not match.");
            }
        } else {
            setErrorMessage('All fields must be filled.');
        }
    };

    const updateLocation = async () => {
        const apiUrl = `https://apiip.net/api/check?accessKey=${import.meta.env.VITE_APP_ID}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setLocation({
                country: data.countryName,
                region: data.regionName,
                city: data.city
            });
        } catch (error) {
            console.log('Error fetching location:', error);
        }
    };

    useEffect(() => {
        updateLocation();
    }, []);

    return (
        <div>
            <div className="flex mx-auto justify-center items-center pt-4 min-h-screen">
                <div className="bg-gray-600 w-[400px] h-[600px] rounded-xl shadow-lg">
                    <div className="flex flex-col justify-between items-center py-6">
                        <FaLocationPinLock className="w-[100px] h-[100px] text-[rgb(173,139,49)]" />
                        <h1 className="text-2xl text-white font-semibold">
                            {location ? `${location.city}, ${location.region}, ${location.country}` : 'Location not available'}
                        </h1>
                    </div>
                    <form className="flex flex-col items-center" onSubmit={updateSignup}>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Input Email"
                            className="border-2 border-[rgb(173,139,49)] w-[300px] pl-4 py-2 rounded mt-4 focus:outline-none focus:ring focus:ring-[rgb(173,139,49)]"
                            required
                        />
                        <input
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            type="password"
                            placeholder="Input password"
                            className="border-2 border-[rgb(173,139,49)] w-[300px] pl-4 py-2 rounded mt-4 focus:outline-none focus:ring focus:ring-[rgb(173,139,49)]"
                            required
                        />
                        <input
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)} // Correctly update confirm state
                            type="password"
                            placeholder="Input confirm pwd"
                            className="border-2 border-[rgb(173,139,49)] w-[300px] pl-4 py-2 rounded mt-4 focus:outline-none focus:ring focus:ring-[rgb(173,139,49)]"
                            required
                        />
                        <button
                            type="submit"
                            className="text-white flex justify-center w-[100px] text-[15px] h-[30px] font-bold py-2 mt-4 bg-[rgb(173,139,49)] rounded hover:bg-[rgb(150,120,40)] transition duration-200"
                        >
                            Submit
                        </button>
                        {errorMessage && (
                            <p className="text-red-500 mt-2">{errorMessage}</p>
                        )}
                        <div className="flex flex-row items-center justify-center mt-6 gap-2 text-white font-bold">
                            <p className="text-[10px] text-white font-bold">Already Have an Account?</p>
                            <span>|</span>
                            <Link to='/'>
                                <p className="cursor-pointer hover:underline">Signin</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;