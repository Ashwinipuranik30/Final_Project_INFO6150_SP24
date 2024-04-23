import Herosection from "../Components/Herosection";
import DestinationIntro from "../Components/DestinationIntro";
import DealCard from "../Components/dealcard";
import ImageGrid from "../Components/imagegrid";
import thailand2 from '../assets/images/thailand2.jpg';
import temple from '../assets/images/temple.jpg';
import indiagallery3 from '../assets/images/indiagallery3.jpg';
import maldives2 from '../assets/images/maldives2.jpg';
import maldives3 from '../assets/images/maldives3.jpg';
import thailand1 from '../assets/images/thailand1.jpg';





const Asia = () => {


  
  const images = [
    { src: thailand2 , alt: "island" },
    { src: maldives2 , alt:"maldives" },
    { src: temple , alt:"india" },
    { src: maldives3 , alt: "maldives" },
    { src: thailand1 , alt:"thailand" },
    { src: indiagallery3 , alt:"india" },
    
  ];


  const cards = [
    {
      imageSrc:"/src/assets/images/india.jpg",
      tourLink:"/destination/asia/india",
          tourTitle:"Vibrant India",
          tourDuration:"10 DAY TOUR",
          showPricesAndButton:false,
          tourDescription:"Experience the vibrant tapestry of India's rich culture, diverse landscapes, and ancient heritage on an unforgettable journey. From bustling markets to serene temples and create memories to last a lifetime.",
          discount:null,
          originalPrice:null,
          offerPrice:null,
    },
    {imageSrc:"/src/assets/images/thailand.jpg",
    tourLink:"/destination/asia/thailand",
    tourTitle:"Thai Tropical Adventure",
    tourDuration:"5 DAY TOUR",
    showPricesAndButton:false,
    tourDescription:"Step into the enchanting realm of a Thai Tropical Adventure, where lush greenery meets azure waters in a harmonious embrace. Explore bustling markets teeming with vibrant colors, immersing yourself in Thailand's captivating beauty.",
    discount:null,
    originalPrice:null,
    offerPrice:null,
    },
    {imageSrc: '/src/assets/images/maldives.jpg',
    tourLink: '/destination/asia/maldives',
    tourTitle: 'Maldives Serenity Retreat',
    tourDuration: '7 DAY TOUR',
    tourDescription: 'Discover paradise in the Maldives, a tropical paradise renowned for its pristine beaches, vibrant coral reefs, and luxurious overwater bungalows. Escape to this idyllic destination for unparalleled relaxation and unforgettable underwater adventures.',
    showPricesAndButton: false,
    originalPrice: null,
    offerPrice: null,
    discount: null,
    },
  ];

    return (
      <div>

          <Herosection 
                  heroImg = "\src\assets\images\asia.jpg"
          />
          <DestinationIntro
           title="ESSENTIAL HIGHLIGHTS OF ASIA"
           duration="The land of Timeless charm"
           description=" Whether you have your heart set on gazing at India's Golden Triangle, eating the best Pad Thai you've ever tasted or ticking off your bucket list at the Great Wall, an Asian vacation offers a multitude of experiences hard to find anywhere else in the world. Ride a camel in the Gobi Desert, climb the mighty Mount Everest, relax on the golden beaches of Bali and explore the incredible Korean capital, Seoul. From cultural immersions to unbeatable hiking adventure opportunities, a tour throughout Asia will not fail to delight even the toughest of critics."
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
  
  export default Asia ;