
  import DestinationIntro from "../Components/DestinationIntro";
  import Herosection from "../Components/Herosection";
  import ImageGrid from "../Components/imagegrid";
  import Francegallery1 from '../assets/images/Francegallery1.jpg';
  import Francegallery2 from '../assets/images/Francegallery2.jpg';
  import Francegallery3 from '../assets/images/Francegallery3.jpg';
  const images = [
    { src: Francegallery1, alt: 'Couple In Paris' },
    { src: Francegallery2 , alt: 'Eiffel Tower' },
    { src: Francegallery3, alt: 'Traveler' },
    
  ];
  const France = () => {
      return (
        <div>
          <Herosection 
                    heroImg = "\src\assets\images\Heroimage_france.jpg"
                    
                  />
        <DestinationIntro
          title="Chic France"
          duration="5 Day Tour"
          description=" Discover the timeless allure of France, a country where every corner tells a story of art, culture, and romance. Nestled in the heart of Europe, France is renowned for its iconic landmarks, exquisite cuisine, and picturesque landscapes. From the vibrant streets of Paris, adorned with elegant boulevards and iconic landmarks like the Eiffel Tower and Louvre Museum, to the sun-kissed vineyards of Bordeaux and the breathtaking coastline of the French Riviera, France offers an unparalleled blend of sophistication and natural beauty. Immerse yourself in the rich tapestry of history as you explore charming medieval villages, majestic châteaux, and scenic countryside vistas. Whether you seek culinary delights, cultural treasures, or simply a leisurely stroll along the Seine River, France beckons with endless possibilities for unforgettable experiences. Let us be your guide as you embark on an enchanting journey through the enchanting land of joie de vivre."
        />
       <ImageGrid images={images} heading="Traveler Photos" />
      </div>
       
    );
  };
    
  
  
  export default France ;