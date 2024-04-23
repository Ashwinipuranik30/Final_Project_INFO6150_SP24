import DestinationIntro from "../Components/DestinationIntro";
import Herosection from "../Components/Herosection";
import ImageGrid from "../Components/imagegrid";
import spaingallery from '../assets/images/spaingallery.jpg';
import spaingallery2 from '../assets/images/spaingallery2.jpg';
import spaingallery3 from '../assets/images/spaingallery3.jpg';
import Itinerary from "../Components/itenary";


const days = [
  {
    title: 'Day 1: Welcome to Spain',
    description: 'Arrive at Josep Tarradellas Barcelona – El Prat Airport. Welcome Cullers! The Barca football (soccer) team awaits your arrival.',
  },
  {
    title: 'Day 2: Arrive in Barcelona + Welcome Dinner',
    description: 'Get ready for an amazing week in Barcelona by the Mediterranean sun. The amazing architecture and the amazing soccer fans will take your spirits high. Have a welcome dinner with the group.',
  },
  {
    title: 'Day 3: Explore the City',
    description: 'Tour the Sagrada Familia. The historic city is home to nine UNESCO World Heritage sites, two of which you will experience today.',
  },
  {
    title: 'Day 4: Free day',
    description: 'Explore the city, unwind, drink, party, and have fun.',
  },
  {
    title: 'Day 5: Camp Nou and Labyrinth Park',
    description: 'Visit Camp Nou and be amazed by seeing one of the GOATs (Greatest of All Time), Messi’s jersey hanging in the press room of the second-largest soccer stadium in the world. Find your way through the twists, turns, and statues of a storybook hedge maze at the labyrinth Park.',
  },
  {
    title: 'Day 6: Free day + Farewell Dinner',
    description: 'Explore the city, unwind, drink, party, and have fun. Have a farewell dinner with the group.',
  },
  {
    title: 'Day 7: Adios Amigos',
    description: 'Goodbye, friends! Your next destination awaits! Pack your bags and head to the airport, to your next destination, home, or maybe another tour with us.',
  },
];


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
                  title = "Spain"
                />
      <DestinationIntro
        title="Sunny Spain"
        duration="7 Day Tour"
        description="Discover the vibrant allure of Spain with Tripinn. Nestled on the Iberian Peninsula, Spain is a captivating tapestry of rich history, stunning landscapes, and vibrant culture. From the sun-kissed beaches of the Costa del Sol to the majestic peaks of the Pyrenees Mountains, Spain offers a diverse array of experiences for every traveler. Lose yourself in the winding streets of Barcelona's Gothic Quarter, indulge in the culinary delights of Basque Country, or immerse yourself in the passionate rhythms of flamenco in Seville. With its charming villages, world-class museums, and iconic landmarks such as the Sagrada Familia and Alhambra Palace, Spain beckons adventurers to explore its endless treasures. We will guide you on an unforgettable journey through this enchanting land where every corner reveals a new story waiting to be told."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-3xl font-serif tracking-tight text-amber-400 sm:text-4xl">ITINERARY</h2>
      </div>
      <Itinerary days={days} />


     <ImageGrid images={images} heading="Traveler Photos" />
    </div>
     
  );
};
  
  export default Spain ;