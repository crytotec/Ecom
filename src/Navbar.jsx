import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown, FaAngleUp, FaSearch, FaShoppingCart } from "react-icons/fa";
import flag from "./images/flag.jpeg";
import { FaCartShopping, FaPerson } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { useAuth } from './AuthContext.jsx'; // Import the Auth context

const Navbar = ({ cart = [] }) => {
    const [location, setLocation] = useState(null);
    const [navbar, setNavbar] = useState(false);
    const [langDropdown, setLangDropdown] = useState(false);
    const [accountDropdown, setAccountDropdown] = useState(false);
    const [ordersDropdown, setOrdersDropdown] = useState(false);
    const { t, i18n } = useTranslation();
    const { userEmail, logout } = useAuth(); // Get userEmail from context
    const navigate = useNavigate(); // Initialize useNavigate

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

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
            console.log(data);
        } catch (error) {
            console.log('Error fetching location:', error);
        }
    };

    useEffect(() => {
        updateLocation();
    }, []);

    const handleLogout = () => {
        logout(); // Call the logout function
        navigate('/'); // Redirect to the login page
    };

    return (
        <>
            {/* Large screen navbar */}
            <div className="hidden lg:flex flex-row justify-between items-center bg-gray-700 w-full h-[50px] p-2">
                <div className="flex items-center h-10 mx-4">
                    <button className="text-white font-bold hover:border hover:border-white">
                        Crytotec
                    </button>
                </div>
                <div className="flex flex-row justify-between items-center gap-2 hover:border hover:border-white">
                    <CiLocationOn style={{ color: "white" }} />
                    <div className="flex flex-col items-start">
                        <h1 className="text-[10px] text-white font-semibold">
                            {location ? `${location.city}, ${location.region}, ${location.country}` : 'Location not available'}
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <select className="w-12 h-6 border text-[15px] border-gray-600" defaultValue="">
                        <option value="" disabled>{t("ALL")}</option>
                        <option>{t("Baby Cardigan")}</option>
                        <option>{t("Baby Clothes")}</option>
                        <option>{t("Baby Caps")}</option>
                    </select>
                    <form className="flex flex-row items-center">
                        <input type="text" placeholder={t("Search")} className="pl-4 h-6 border border-gray-400" />
                        <button className="bg-white flex items-center w-6 h-6">
                            <FaSearch className="text-gray-500 w-6 h-4" />
                        </button>
                    </form>
                </div>
                <div onClick={() => setLangDropdown(!langDropdown)} className="flex relative flex-row items-center cursor-pointer gap-2 hover:border hover:border-white">
                    <img src={flag} alt="Country flag" className="w-6 h-4" />
                    <h1 className="text-white text-[15px]">{t("Language")}</h1>
                    {langDropdown ? <FaAngleUp className="text-white" /> : <FaAngleDown className="text-white" />}
                    {langDropdown && (
                        <div className="bg-gray-700 w-[120px] absolute z-10 top-11 text-white flex flex-col p-4 space-y-2">
                            <ul className="space-y-2">
                                <li onClick={() => changeLanguage("en")} className="hover:underline duration-100">{t("English")}</li>
                                <li onClick={() => changeLanguage("yo")} className="hover:underline duration-100">{t("Yoruba")}</li>
                                <li onClick={() => changeLanguage("ig")} className="hover:underline duration-100">{t("Igbo")}</li>
                                <li onClick={() => changeLanguage("ha")} className="hover:underline duration-100">{t("Hausa")}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div onClick={() => setAccountDropdown(!accountDropdown)} className="flex relative flex-col items-start px-2 py-1 hover:border hover:border-white hover:rounded-md cursor-pointer">
                    <div className="flex flex-row items-center gap-1">
                        <p className="text-white grid grid-cols-1 text-[10px]">{userEmail ? `Hello, ${userEmail}` : 'Hello, Guest'}</p>
                        {accountDropdown ? <FaAngleUp className="text-white" /> : <FaAngleDown className="text-white" />}
                        {accountDropdown && (
                            <div className="bg-gray-700 w-[120px] absolute z-10 top-14 text-white flex flex-col p-4 space-y-2">
                                <ul className="space-y-2">
                                    <li onClick={handleLogout} className="hover:underline text-[15px] duration-100">{t("Sign out")}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div onClick={() => setOrdersDropdown(!ordersDropdown)} className="flex flex-col relative cursor-pointer items-start hover:border hover:border-white">
                    <p className="text-white text-[10px]">{t("Returns")}</p>
                    <div className="flex flex-row items-center gap-2">
                        <h1 className="text-white text-[15px]">{t("& Orders")}</h1>
                        {ordersDropdown ? <FaAngleUp className="text-white" /> : <FaAngleDown className="text-white" />}
                    </div>  
                </div>
                <Link to='/Cart'>
                    <div className="text-white flex flex-row cursor-pointer items-center gap-2 mx-4 hover:border hover:border-white">
                        <div className="relative">
                            <FaCartShopping />
                            <span className="rounded absolute -bottom-2 left-0 bg-red-900 w-3 h-3 text-[10px] text-center block">
                                {totalItems || 0} {/* Show "0" if cart is empty */}
                            </span>
                        </div>
                        <h1>{t("Cart")}</h1>
                    </div>
                </Link>
            </div>
            <div className="p-4 w-full h-[50px] bg-gray-800">
                <div className="flex flex-row justify-center text-[15px] text-white items-center gap-10 mx-4">
                    <h1 className="hover:underline cursor-pointer">
                        <Link to='/'>Home</Link>
                    </h1>
                    <Link to="/About">
                    <h1 className="hover:underline cursor-pointer">About</h1>
                    </Link>
                    <Link to="/Contact">
                    <h1 className="hover:underline cursor-pointer">Contact Us</h1>
                    </Link>
                </div>
            </div>

            {/* Small screen navbar */}
            <div className="lg:hidden flex justify-between items-center bg-gray-700 p-4">
                <button onClick={() => setNavbar(!navbar)}>
                    {navbar ? <X className="text-white" /> : <Menu className="text-white" />}
                </button>
                <h1 className="text-white font-bold">Crytotec</h1>
                <div className="flex items-center gap-2 text-white ">
                  

                <div onClick={() => setAccountDropdown(!accountDropdown)} className="flex relative flex-col items-start px-2 py-1 hover:border hover:border-white hover:rounded-md cursor-pointer">
                    <div className="flex flex-row items-center gap-1">
                        <p className="text-white grid grid-cols-1 text-[10px]">{userEmail ? `Hello, ${userEmail}` : 'Hello, Guest'}</p>
                        {accountDropdown ? <FaAngleUp className="text-white" /> : <FaAngleDown className="text-white" />}
                        {accountDropdown && (
                            <div className="bg-gray-700 w-[120px] absolute z-10 top-14 text-white flex flex-col p-4 space-y-2">
                                <ul className="space-y-2">
                                    <li onClick={handleLogout} className="hover:underline text-[15px] duration-100">{t("Sign out")}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                    <Link to='/Cart'>
                        <div className="relative">
                            <FaCartShopping />
                            <span className="rounded absolute -bottom-2 left-0 bg-red-900 w-3 h-3 text-[10px] text-center block">
                                {totalItems || 0}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            {navbar && (
                <div className="bg-gray-700 mt-2 text-white flex flex-col p-4 space-y-2">
                    <ul className="space-y-2">
                        <Link to='./Home'>
                            <li className="hover:underline">{t("Home")}</li>
                        </Link>
                        <Link to='/About'>
                        <li className="hover:underline">{t("About")}</li>
                        </Link>
                        <Link to='./Cart'>
                        <li className="hover:underline">{t("Add to Cart")}</li>
                        </Link>
                        <Link to='./Contact'>
                        <li className="hover:underline">{t("Contact Us")}</li>
                        </Link>
                    </ul>
                </div>
            )}
            
        </>
    );
};

Navbar.propTypes = {
    cart: PropTypes.array,
};

export default Navbar;