import Contactform from '../Components/Contactform'
import Contactinfo from '../Components/Contactinfo';
import Faq from '../Components/Faq';
import ImageGrid from '../Components/imagegrid';
import Herosection from "../Components/Herosection";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";



const Contactus = () => {

  const images = [
    { src: gallery1, alt: 'Couple In Paris' },
    { src: gallery2 , alt: 'Eiffel Tower' },
    { src: gallery3, alt: 'Traveler' },
    { src: gallery4, alt: 'Couple In Paris' },
    { src: gallery5 , alt: 'Eiffel Tower' },
    { src: gallery6, alt: 'Traveler' },
    
  ];
    return (
      <>
      <Herosection 
          heroImg = "\src\assets\images\Heroimage_contact.jpg"
          title ="Contact Us"
        />
      <div className ="bg-white" id="contact">
      <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h1 className ="mb-4 text-3xl font-serif tracking-tight leading-none text-amber-400 md:text-5xl lg:text-6xl ">Contact Us</h1>
      </div>
      <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
            <h2 className ="text-2xl  text-gray-900 mb-4">
              How can we help you
            </h2>
        <Contactform/>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <Contactinfo/>
        </div>
        </div>
        
      </div>
      <Faq />

      <ImageGrid images={images} heading="This is how we do travel" />
      

      

      
      </>
    );
  };
  
  export default Contactus;