import b20 from './images/b20.jpeg';
import b5 from './images/b5.jpeg';
import b6 from './images/b6.jpeg';
import b19 from './images/b19.jpeg';




function About() {
   return(
   <div>
       <div className="w-full h-[300px] bg-[rgb(173,139,49)] ">
       <div className='flex-col text-white text-justify flex justify-center items-center mx-auto'>
               <h1 className='text-2xl text-gray-700 font-bold'>About US</h1>
            <p className='text-[12px] w-1/2 sm:w-1/4'>Our journey began with a vision to make quality and stylish clothing accessible to everyone.
                 What started as a passion for fashion has grown into a community of like-minded individuals who value comfort, 
                 style, and sustainability.</p>
        </div>
        <div className='grid grid-cols-4 w-1/2 sm:w-1/3 gap-1 mx-auto  py-6'>
         <img src={b20} className="sm:h-[100px] h-[80px] rounded-md w-[80px] sm:w-[100px] object-cover"></img>
         <img src={b5}  className="sm:h-[100px] h-[80px] rounded-md w-[80px] sm:w-[100px] object-cover"></img>
         <img src={b6}  className="sm:h-[100px] h-[80px] rounded-md w-[80px] sm:w-[100px] object-cover"></img>
         <img src={b19} className="sm:h-[100px] h-[80px] rounded-md w-[80px] sm:w-[100px] object-cover"></img>
        </div>
       </div>
       
       <div className=' h-[200px] w-1/2 flex-col text-white text-justify flex justify-center items-center mx-auto'>
               <h1 className='text-2xl text-start text-gray-700 font-bold'> Mission Statement</h1>
            <p className='text-[12px] w-full text-gray-500'>Our mission is to empower people with confidence through clothing that fits perfectly 
                and complements every style. We strive to create a seamless shopping experience for our customers while delivering exceptional quality.</p>   
    </div>

    <div className='grid grid-cols-2 h-[200px] w-[200px] sm:w-[400px]  justify-center mx-auto'>
        <img src={b5}  className="sm:h-[150px] h-[100px] rounded-md w-[80px] sm:w-[150px] object-cover"/>
        <ul className='h-[120px] text-justify'>
            <li className='text-[7px] lg:text-[10px] font-bold text-gray-500'>We prioritize sustainability by using eco-friendly materials and ethical production methods.</li>
            <li className='text-[7px] lg:text-[10px] font-bold text-gray-500'>Our clothing is crafted with premium fabrics to ensure both style and durability.</li>
            <li className='text-[7px] lg:text-[10px] font-bold text-gray-500'>We offer a wide range of sizes, ensuring everyone can find their perfect fit.</li>
        </ul>
        </div>

        <div className='bg-[rgb(173,139,49)] mb-2 mx-auto rounded m flex justify-center items-center h-[100px]'>
         <h1 className='text-white w-1/2 text-[10px] md:text-[15px] cursor-pointer mx-4'>
         Every piece in our collection is inspired by you. 
         We love hearing your feedback and watching our designs come to life in your everyday looks.
         </h1>
         </div>
    </div>
   )
 }
export default About