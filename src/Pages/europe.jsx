import Herosection from "../Components/Herosection";
import DestinationIntro from "../Components/DestinationIntro";
import DealCard from "../Components/dealcard";
import ImageGrid from "../Components/imagegrid";
import italygallery from '../assets/images/italygallery.jpg';
import Francegallery1 from '../assets/images/Francegallery1.jpg';
import spaingallery from '../assets/images/spaingallery.jpg';
import Italygallery1 from '../assets/images/Italygallery1.jpg';
import spaingallery2 from '../assets/images/spaingallery2.jpg';
import Francegallery2 from '../assets/images/Francegallery2.jpg';





const Europe = () => {

  const images = [
    { src: italygallery , alt: "italy" },
    { src: Francegallery1 , alt:"france" },
    { src: spaingallery , alt:"spain" },
    { src: Italygallery1 , alt: "italy" },
    { src: spaingallery2 , alt:"france" },
    { src: Francegallery2 , alt:"spain" },
    
  ];

  const cards = [
    {
      imageSrc: 'https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tourLink: '/destination/europe/france',
      tourTitle: 'Chic France',
      tourDuration: '10 DAY TOUR',
      tourDescription: 'France with captivating blend of art, history, and gastronomy, boasting iconic landmarks like the Eiffel Tower and stunning landscapes like the French Riviera. From its exquisite cuisine to its rich cultural heritage, France offers an unforgettable experience for every traveler.',
      showPricesAndButton: false,
      originalPrice: null,
      offerPrice: null,
      discount: null,
    },
    {
      imageSrc: '/src/assets/images/spain.jpg',
      tourLink: '/destination/europe/spain',
      tourTitle: 'Sunny Spain',
      tourDuration: '7 DAY TOUR',
      tourDescription: 'Bask in the warmth of Sunny Spains vibrant culture and stunning landscapes. Indulge in delicious cuisine, explore historic landmarks, and create memories that will last a lifetime.',
      showPricesAndButton: false,
      originalPrice: null,
      offerPrice: null,
      discount: null,
    },
    {
      imageSrc: 'https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tourLink: '/destination/europe/italy',
      tourTitle: 'The Best of Italy',
      tourDuration: '10 DAY TOUR',
      tourDescription: 'Explore Italy\'s timeless beauty with whispers of ancient ruins and Renaissance art, accompanied by tantalizing cuisine that enchants every traveler\'s heart. Italy beckons with a symphony of sights and flavors, promising an unforgettable journey.',
      showPricesAndButton: true,
      originalPrice: null,
      offerPrice: null,
      discount: null,
    },
  ];
    return (
      <div>

        <Herosection 
                  heroImg = "\src\assets\images\europe.jpg"
                  
                />
         <DestinationIntro
          title="BEST DESTINATIONS IN EUROPE"
          duration="Explore the trendiest destinations"
          description=" In partnership with more than 300 European tourism offices including 80 sustainable tourism destinations, we invite you to discover the best of Europe. Do you want a city break or a refreshing break in the country? Can’t make up your mind between a holiday on one of the most beautiful beaches in Europe or a family skiing holiday, a shopping trip with friends or a romantic getaway with your lover? What about a gastronomic trip or a culture trip?

 

          Discover the most beautiful destinations in Europe. Make your choice and plan your trip at the best price in just a few minutes.
          
           
          
          "
         
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h2 className="text-3xl font-serif tracking-tight text-amber-400 sm:text-4xl">Discover your next adventure</h2>
        </div>

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <DealCard
            key={index}
            pagetype="default"
            imageSrc={card.imageSrc}
            tourLink={card.tourLink}
            tourTitle={card.tourTitle}
            tourDuration={card.tourDuration}
            showPricesAndButton={false}
            tourDescription={card.tourDescription}
            originalPrice={card.originalPrice}
            offerPrice={card.offerPrice}
            discount={card.discount}
          />
        ))}
      </div>
    </div>


    <ImageGrid images={images} heading="Traveler Photos" />








      </div>
    );
  };
  
  export default Europe ;