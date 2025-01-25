import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import { FaLocationPinLock } from "react-icons/fa6";
import download from './images/download.png';
import { useAuth } from './AuthContext'; // Import the Auth context

function Signin() {
    const [location, setLocation] = useState(null);
    const [user, setUser ] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        const storedEmail = localStorage.getItem('Email');
        const storedPwd = localStorage.getItem('PWD');

        if (storedEmail && storedPwd) {
            setUser (storedEmail);
            setPassword(storedPwd);
            login(storedEmail); // Automatically log in the user with email
            navigate('/Home'); // Redirect to the home page
        }
    }, [login, navigate]);

    const loginSet = (event) => {
        event.preventDefault();
        const storedEmail = localStorage.getItem('Email'); 
        const storedPwd = localStorage.getItem('PWD'); 
        if (user === storedEmail && password === storedPwd) {
            login(user); // Pass the user's email to the login function
            navigate('/Home');
            setErrorMessage('');
        } else {
            setErrorMessage("You don't have an account or incorrect credentials."); 
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
                <div className="bg-gray-600 w-[400px] h-[550px] rounded-xl shadow-lg">
                    <div className="flex flex-col justify-between items-center py-6">
                        <FaLocationPinLock className="w-[100px] h-[100px] text-[rgb(173,139,49)]" />
                        <h1 className="text-2xl text-white font-semibold">
                            {location ? `${location.city}, ${location.region}, ${location.country}` : 'Location not available'}
                        </h1>
                    </div>
                    <div className="flex flex-row justify-between items -center px-6 mb-4">
                        <p className="text-[10px] text-white font-bold">Need an Account?</p>
                        <Link to='/SignUp'>
                            <button className="text-[10px] bg-[rgb(173,139,49)] px-4 py-1 rounded cursor-pointer text-white font-bold hover:bg-[rgb(150,120,40)] transition duration-200">
                                Register
                            </button>
                        </Link>
                    </div>
                    <form className="flex flex-col items-center" onSubmit={loginSet}>
                        <input
                            type="text"
                            placeholder="Input Email"
                            className="border-2 border-[rgb(173,139,49)] w-[300px] pl-4 py-2 rounded mt-4 focus:outline-none focus:ring focus:ring-[rgb(173,139,49)]"
                            required
                            value={user}
                            onChange={(e) => setUser (e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Input password"
                            className="border-2 border-[rgb(173,139,49)] w-[300px] pl-4 py-2 rounded mt-4 focus:outline-none focus:ring focus:ring-[rgb(173,139,49)]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        
                        <button
                            type="submit"
                            className="text-white w-[100px] text-[15px] h-[30px] font-bold py-2 mt-4 bg-[rgb(173,139,49)] rounded hover:bg-[rgb(150,120,40)] transition duration-200"
                        >
                            Submit
                        </button>
                        {errorMessage && (
                            <p className="text-red-500 mt-2 pl-20">
                                {errorMessage} <Link to='/SignUp' className="text-blue-500 underline">Signup</Link>
                            </p>
                        )}
                        <button
                            type="button"
                            className="text-white mx-2 h-[30px] flex flex-row justify-between items-center gap-1 px-10 py-1 mt-4 bg-[rgb(173,139,49)] rounded hover:bg-[rgb(150,120,40)] transition duration-200"
                        >
                            <img src={download} className="w-8 h-8" alt="Download" /> 
                            <h1 className="text-[15px] font-bold text-nowrap">Login with Google</h1>
                        </button>
                    </form>
                </div> 
            </div>
        </div>
    );
}

export default Signin;