import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center rounded bg-[rgb(173,139,49)] w-full h-[300px] mx-auto">
            <h1 className='text-2xl text-gray-700 font-bold'>{t('About Us')}</h1>
            <p className='text-[15px] text-justify w-1/2 sm:w-1/4 mx-2 text-white'>
                {t("We’d love to hear from you! Whether you have a question about your order, need help with sizing, or just want to say hi, feel free to reach out to us.")}
            </p>
            <div className="grid text-white grid-cols-4 w-1/8 gap-2 mt-2">
                <FaFacebook className="cursor-pointer" />
                <FaWhatsapp className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
            </div>
        </div>
    );
}

export default Contact;