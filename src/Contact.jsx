import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"






function Contact() {
    return(
        <div className="flex flex-col items-center justify-center mb-2 rounded bg-[rgb(173,139,49)] w-1/2 h-[150px] mx-auto">
            <h1 className='text-2xl text-gray-700 font-bold'>About US</h1>
           <p className='text-[15px] text-justify mx-2 text-white'> We’d love to hear from you! Whether you have a question about your order, need help with sizing, 
            or just want to say hi, feel free to reach out to us.
            </p>
            <div className="grid text-white grid-cols-4 w-1/2 mt-2">
                <FaFacebook className="cursor-pointer"/>
                <FaWhatsapp className="cursor-pointer"/>
                <FaInstagram className="cursor-pointer"/>
                <FaTwitter className="cursor-pointer"/>
            </div>
            
        </div>
    )
}
export default Contact