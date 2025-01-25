import bb13 from './images/bb13.jpeg';
import b5 from './images/b5.jpeg';
import b6 from './images/b6.jpeg';
import b19 from './images/b19.jpeg';
import b20 from './images/b20.jpeg';
import cap from './images/cap.jpeg';
import cap1 from './images/cap1.jpeg';
import bb14 from './images/bb14.jpeg';
import { Items, Gown, Cardigan } from './Item'; // Ensure Items and Gown are valid arrays
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Section = ({updateCart}) => 
  {
  const { t } = useTranslation(); 
  const slides = [
    { title: t('Best Sales in Cloths'), data: Items },
    { title: t('Best Sales in Gown'), data: Gown },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* Background Section */}
      <div
        className='mb-4'
        style={{
          backgroundImage: `url(${bb13})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[1200px] mx-auto justify-center items-center p-4">
          {/* Cardigan */}
          <div className="w-full h-[220px] bg-white flex flex-col items-center p-4">
            <h1 className="font-bold mb-2">{t('Cardigan')}</h1>
            <div className="flex gap-2">
              <div className='flex flex-col gap-2 items-center justify-between'>
                <img src={b5} alt="Cardigan 1" className="h-[100px] w-[80px] sm:w-[100px] object-cover" />
                <button  onClick={() => updateCart ({id: 1, img: b5, price: 15000 })} className='w-full text-[10px] h-10 rounded bg-[rgb(173,139,49)] duration-500 hover:bg-[rgb(160,173,49)] p-2 mt-2 '><h1 className='text-white mx-1 font-bold'>{t('Price')}: 15000 naira</h1>
                  <div className='text-white text-[10px] mx-1 font-bold'>{t('Add to Cart')}</div>
                </button> 
              </div>

              <div className='flex flex-col gap-2 items-center justify-between'>
                <img src={b6} alt="Cardigan 2" className="h-[100px] w-[80px] sm:w-[100px] object-cover" />
                <button  onClick={() => updateCart({id: 2, img: b6, price: 10000 })} className='w-full text-[10px] h-10 rounded bg-[rgb(173,139,49)] duration-500 hover:bg-[rgb(160,173,49)] p-2 mt-2 '><h1 className='text-white mx-1 font-bold'>{t('Price')}: 10000 naira</h1>
                  <h1 className='text-white text-[10px] mx-1 font-bold'>{t('Add to Cart')}</h1>
                </button>
              </div>
            </div>
          </div>

          {/* Cloths */}
          <div className="w-full h-[220px] bg-white flex flex-col items-center p-4">
            <h1 className="font-bold mb-2">{t('Cloths')}</h1>
            <div className="flex gap-2">
              <div className='flex flex-col gap-2 items-center justify-between'>
                <img src={b19} alt="Cloth 1" className="h-[100px] w-[80px] sm:w-[100px] object-cover" />
                <button  onClick={() => updateCart({id: 3, img: b19, price: 12000 })} className='w-full text-[10px] h-10 rounded bg-[rgb(173,139,49)] duration-500 hover:bg-[rgb(160,173,49)] p-2 mt-2 '><h1 className='text-white mx-1 font-bold'>{t('Price')}: 12000 naira</h1>
                  <h1 className='text-white text-[10px] mx-1 font-bold'>{t('Add to Cart')}</h1>
                </button>
              </div>
              <div className='flex flex-col gap-2 items-center justify-between'>
                <img src={b20} alt="Cloth 2" className="h-[100px] w-[80px] sm:w-[100px] object-cover" />
                <button  onClick={() => updateCart({id: 4, img: b20, price: 20000 })} className='w-full text-[10px] h-10 rounded bg-[rgb(173,139,49)] duration-500 hover:bg-[rgb(160,173,49)] p-2 mt-2 '><h1 className='text-white mx-1 font-bold'>{t('Price')}: 20000 naira</h1>
                  <h1 className='text-white text-[10px] mx-1 font-bold'>{t('Add to Cart')}</h1>
                </button>
              </div>
            </div>
          </div>

          {/* Gowns */}
          <div className="w-full h-[220px] bg-white flex flex-col items-center p-4">
            <h1 className="font-bold mb-2">{t('Gowns')}</h1>
            <div className="flex gap-2">
              <div className='flex flex-col gap-2 items-center justify-between'>
                <img src={bb14} alt="Gown 1" className="h-[100px] w-[80px] sm:w-[100px] object-cover" />
                <button  onClick={() => updateCart({id: 5, img: b5, price: 1500 })} className='w-full text-[10px] h-10 rounded bg-[rgb(173,139,49)] duration-500 hover:bg-[rgb(160,173,49)] p-2 mt-2 '><h1 className='text-white mx-1 font-bold'>{t('Price')}: 1500 naira</h1>
                  <h1 className='text-white text-[10px] mx-1 font-bold'>{t('Add to Cart')}</h1>
                </button>
              </div>
              <div className='flex flex-col gap-2 items-center justify-between'>
                <img src={b6} alt="Gown 2" className="h-[100px] w-[80px] sm:w-[100px] object-cover" />
                <button  onClick={() => updateCart({id: 6, img: b5, price: 5000 })} className='w-full text-[10px] h-10 rounded bg-[rgb(173,139,49)] duration-500 hover:bg-[rgb(160,173,49)] p-2 mt-2 '><h1 className='text-white mx-1 font-bold'>{t('Price')}: 5000 naira</h1>
                  <h1 className='text-white text-[10px] mx-1 font-bold'>{t('Add to Cart')}</h1>
                </button>
              </div>
            </div>
          </div>

          {/* Caps */}
          <div className="w-full h-[220px] bg-white flex flex-col items-center p-4">
            <h1 className="font-bold mb-2">{t('Caps')}</h1>
            <div className="flex gap-2">
              <div className='flex flex-col gap-2 items-center justify-between'>
                <img src={cap} alt="Cap 1" className="h-[100px] w-[80px] sm:w-[100px] object-cover" />
                <button  onClick={() => updateCart({id: 7, img: b5, price: 1000 })} className='w-full text-[10px] h-10 rounded bg-[rgb(173,139,49)] duration-500 hover:bg-[rgb(160,173,49)] p-2 mt-2 '><h1 className='text-white mx-1 font-bold'>{t('Price')}: 1000 naira</h1>
                  <h1 className='text-white text-[10px] mx-1 font-bold'>{t('Add to Cart')}</h1>
                </button>
              </div>
              <div className='flex flex-col gap-2 items-center justify-between'>
                <img src={cap1} alt="Cap 2" className="h-[100px] w-[80px] sm:w-[100px] object-cover" />
                <button onClick={() => updateCart({id: 8, img: b5, price: 1000 })} className='w-full text-[10px] h-10 rounded bg-[rgb(173,139,49)] duration-500 hover:bg-[rgb(160,173,49)] p-2 mt-2 '><h1 className='text-white mx-1 font-bold'>{t('Price')}: 1000 naira</h1>
                  <h1 className='text-white text-[10px] mx-1 font-bold'>{t('Add to Cart')}</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Slide Content Section */}
        <div className="relative font-bold text-2xl p-4 mt-4">
          <h1 className="text-center font-bold mb-4">{slides[currentSlide].title}</h1>
          <div className="absolute top-1/2 left-0 flex items-center justify-between w-full px-4">
            <FaArrowLeft
              className="text-black cursor-pointer bg-white rounded-full p-2 shadow-lg"
              size={32}
              onClick={handlePrev}
            />
            <FaArrowRight
              className="text-black cursor-pointer bg-white rounded-full p-2 shadow-lg"
              size={32}
              onClick={handleNext}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  {slides[currentSlide]?.data.map((item, index) => (
    <div key={item.id || index} className="bg-white p-2 shadow-md rounded-lg">
      <img
        src={item.img}
        alt={`Image of ${item.name || "Unnamed item"}`}
        className="w-full h-[150px] object-cover rounded-md"
      />
    </div>
  ))}
</div>
  
        </div>
      </div>

      <div className='font-bold mx-4'>
        <button className='bg-[rgb(173,139,49)] rounded w-[200px] duration-500 hover:bg-[rgb(160,173,49)] text-nowrap mt-2'>{t('Shop your Cardigan')}</button>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 p-2'>
  {Cardigan.map((cardigan, index) => (
    <div key={cardigan.id || index} className='bg-gray-700 w-full p-4 rounded-xl'>
      <img 
        src={cardigan.img} 
        alt={`Cardigan ${cardigan.id || index}`} 
        className='object-cover h-[350px] sm:h-[500px] w-full' 
      />
      <button 
       className='w-full h-14 rounded bg-[rgb(173,139,49)] duration-500 hover:bg-[rgb(160,173,49)] p-2 mt-2'
      onClick={() => updateCart({id: cardigan.id, img: cardigan.img, price: cardigan.price})}
      type="button" // Optional: specify type if needed
      aria-label={`${t('Add to Cart')} - ${cardigan.price}`} // Optional: for accessibility
>
        <h1 className='text-white mx-1 font-bold'>{t('Price')}: {cardigan.price}</h1>
       <h1 className='text-white mx-1 font-bold'>{t('Add to Cart')}</h1>
       </button>
    </div>
  ))}
</div>


     

      {/* Repeat similarly for Caps and Cloths sections */}
    </div>

    
  );
}


export default Section;
