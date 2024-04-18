import DestinationIntro from "../Components/DestinationIntro";
import Herosection from "../Components/Herosection";
import ImageGrid from "../Components/imagegrid";
import spaingallery from '../assets/images/spaingallery.jpg';
import spaingallery2 from '../assets/images/spaingallery2.jpg';
import spaingallery3 from '../assets/images/spaingallery3.jpg';
const images = [
  { src: spaingallery, alt: 'In Madrid' },
  { src: spaingallery2 , alt: 'Town on Seashore' },
  { src: spaingallery3, alt: 'Light House' },
  
];
const Spain = () => {
    return (
      <div>
        <Herosection 
                  heroImg = "\src\assets\images\Heroimage_spain.jpg"
                  
                />
      <DestinationIntro
        title="Sunny Spain"
        duration="7 Day Tour"
        description="Discover the vibrant allure of Spain with Tripinn. Nestled on the Iberian Peninsula, Spain is a captivating tapestry of rich history, stunning landscapes, and vibrant culture. From the sun-kissed beaches of the Costa del Sol to the majestic peaks of the Pyrenees Mountains, Spain offers a diverse array of experiences for every traveler. Lose yourself in the winding streets of Barcelona's Gothic Quarter, indulge in the culinary delights of Basque Country, or immerse yourself in the passionate rhythms of flamenco in Seville. With its charming villages, world-class museums, and iconic landmarks such as the Sagrada Familia and Alhambra Palace, Spain beckons adventurers to explore its endless treasures. We will guide you on an unforgettable journey through this enchanting land where every corner reveals a new story waiting to be told."
      />
     <ImageGrid images={images} heading="Traveler Photos" />
    </div>
     
  );
};
  
  export default Spain ;