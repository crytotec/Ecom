import { useState } from "react";
import { FaArrowAltCircleUp, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import flag from "./images/flag.jpeg";

const Footer = () => {
  const { t, i18n } = useTranslation();
  
  const up = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  const [Up, setUp] = useState(false);
  const updatesetup = () => {
    setUp(!Up);
  };

  const [upto, setUpto] = useState(false);
  const updateUpto = () => {
    setUpto(!upto);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setUp(false);  
  };

  return (
    <div>
      {/* Back to Top Button */}
      <div onClick={up} className="w-full h-10 bg-gray-400">
        <div className="flex flex-row justify-center items-center gap-1 cursor-pointer">
          <h1 className="text-center font-bold">{t("Back to Top")}</h1>
          <FaArrowAltCircleUp />
        </div>
      </div>
      
      {/* Footer */}
      <footer className='bg-gray-800 w-full h-[320px]'>
        <div className='grid grid-cols-3 justify-center mx-1 text-white items-center'>
          <div className='flex flex-col justify-start items-start mx-auto gap-2'>
          <h1 className='mt-2 font-bold text-[15px] hover:underline cursor-pointer'>{t("Get to Know Us")}</h1>
            <button className='text-[12px] hover:underline'>{t("Careers")}</button>
            <button className='text-[12px] hover:underline'>{t("Blogs")}</button>
            <button className='text-[12px] hover:underline'>{t("About Crytotec")}</button>
          </div>

          <div className='flex flex-col justify-start items-start mx-auto gap-2'>
            <h1 className='mt-2 font-bold text-[15px] hover:underline cursor-pointer'>{t("Contact Us")}</h1>
            <button className='text-[12px] hover:underline'>{t("Facebook")}</button>
            <button className='text-[12px] hover:underline'>{t("Twitter")}</button>
            <button className='text-[12px] hover:underline'>{t("Instagram")}</button>
            <button className='text-[12px] hover:underline'>{t("Whatsapp")}</button>
          </div>

          <div className='flex flex-col justify-start items-start mx-auto gap-2'>
            <h1 className='mt-2 font-bold text-[15px] cursor-pointer hover:underline'>{t("Payment")}</h1>
            <button className='text-[12px] hover:underline'>{t("Careers")}</button>
            <button className='text-[12px] hover:underline'>{t("Blogs")}</button>
            <button className='text-[12px] hover:underline'>{t("About Crytotec")}</button>
          </div>

          
        </div>

        <div className='border border-white mt-2 '></div>
           <div className='flex mx-2 gap-2'>
        <div className='flex flex-row  gap-2 px-10 items-center justify-center mx-auto mt-2'>
          <h1 className='text-white cursor-pointer'>{t("Crytotec")}</h1>

          <div onClick={updatesetup} className='grid grid-cols-3 gap-2 items-center border border-white h-[40px] mx-auto p-2 text-white'>
            <img src={flag} className="w-4 h-4" alt="flag" />
            <h1 className="text-[10px]">{t("English")}</h1>
            {Up ? <FaArrowDown /> : <FaArrowUp />}
          </div>

          <div onClick={updateUpto} className='border flex flex-row items-center gap-2 border-white cursor-pointer w-[160px] h-[40px] text-white py-2 text-[12px] px-4'>
            $NGN - Nig. Naira
            {upto ? <FaArrowDown /> : <FaArrowUp />}
          </div>
        </div>
        </div>

        {/* Language Dropdown */}
        {Up && (
          <div className="grid grid-cols-1 top-10 text-white text-center p-2 h-[125px] mt-1 text-xl mx-auto w-1/2 bg-orange-400  gap-1">
            <h1 onClick={() => changeLanguage("en")} className="text-[10px] cursor-pointer">{t("English")}</h1>
            <h1 onClick={() => changeLanguage("yo")} className="text-[10px] cursor-pointer">{t("Yoruba")}</h1>
            <h1 onClick={() => changeLanguage("ig")} className="text-[10px] cursor-pointer">{t("Igbo")}</h1>
            <h1 onClick={() => changeLanguage("ha")} className="text-[10px] cursor-pointer">{t("Hausa")}</h1>
          </div>
        )}

        {/* Currency Dropdown */}
        {upto && (
          <div className="flex flex-row items-center justify-center top-10 text-center  text-xl mx-auto w-1/4 text-white  mt-2 bg-orange-400   gap-2">
            <h1 className="text-[10px] cursor-pointer">$ NGN -</h1>
            <h1 className="text-[10px] cursor-pointer">Naira</h1>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
