import DestinationIntro from "../Components/DestinationIntro";
import Herosection from "../Components/Herosection";
import ImageGrid from "../Components/imagegrid";
import italygallery from '../assets/images/italygallery.jpg';
import Italygallery1 from '../assets/images/Italygallery1.jpg';
import Itallygallery3 from '../assets/images/Itallygallery3.jpg';
import Itinerary from "../Components/itenary";
const days = [
  {
    title: 'Day 1: Welcome to Italy',
    description: 'Arrive at Leonardo da Vinci-Fiumicino Airport. Welcome to the birthplace of Vespa! Meet the fellow travelers and tour guide at the hotel.',
  },
  {
    title: 'Day 2:  Arrive in Rome',
    description: 'Visit the beautiful city of Rome, including the Colosseum and ancient Rome. In the morning, satisfy your food cravings by visiting some amazing restaurants. At night, enjoy the welcome dinner with the group.',
  },
  {
    title: 'Day 3: Free day in Rome',
    description: 'See the ruins of several Roman temples, including the temple of Vestal Virgins. Ship, eat, drink, and talk like an Italian and party like one.',
  },
  {
    title: 'Day 4: Travel to Florence Via Orvieto',
    description: 'Experience the beauty of Florence via a scenic route through Orvieto, discovering the stunning architecture and cultural treasures of both cities in one unforgettable day.',
  },
  {
    title: 'Day 5: Day at Florence',
    description: 'The Renaissance artwork in Florence will blow your mind. Join a local guide and go for a walk in the compact capital of Tuscany.',
  },
  {
    title: 'Day 6: A Day of Art, Architecture',
    description: 'Immerse yourself in the Renaissance splendor of Florence with a day filled with iconic landmarks such as the Uffizi Gallery, Michelangelos David at the Accademia, and the magnificent Duomo, alongside leisurely strolls along the Arno River and indulgent Tuscan cuisine.',
  },
  {
    title: 'Day 7: Free day in Florence',
    description: 'Unwind; go for another relaxing walk and enjoy your stay in Florence.',
  },
  {
    title: 'Day 8: Travel to Venice',
    description: 'Travel to Venice via Emilia Romagna. Board your private coach, enjoy the scenic journey, and sip some great Italian wine with some amazing pizza. Wander through the narrow streets and alleyways of Venice, known as "calli" and "campi".',
  },
  {
    title: 'Day 9: Tour Venice + Farewell Dinner',
    description: 'Head to St. Mark’s Square and begin your sightseeing with a local guide. Have an amazing farewell dinner with the group.',
  },
  {
    title: 'Day 10: Arrivederci, Amici!',
    description: 'Pack your bags and head to the airport, to your next destination, home, or maybe another tour with us.',
  },
];

const images = [
  { src: italygallery, alt: 'colosseum' },
  { src: Italygallery1 , alt: 'Traveler' },
  { src: Itallygallery3, alt: 'People Canoeing' },
  
];
const Italy = () => {
    return (
      <div>
        <Herosection 
                  heroImg = "\src\assets\images\Heroimage_italy.jpg"
                  title ="Italy"
                />
      <DestinationIntro
        title="The Best of Italy"
        duration="10 Day Tour"
        description="Italy, a land of unparalleled beauty and rich cultural heritage, beckons travelers with its captivating charm and timeless allure. Nestled in the heart of Europe, Italy boasts a mesmerizing blend of historical wonders, artistic treasures, and picturesque landscapes. From the iconic ruins of ancient Rome to the romantic canals of Venice, each corner of this enchanting country tells a story of its illustrious past. Indulge in the culinary delights of authentic Italian cuisine, explore the sun-kissed vineyards of Tuscany, or lose yourself amidst the breathtaking scenery of the Amalfi Coast. Whether you seek the grandeur of Renaissance art, the thrill of bustling city life, or the serenity of idyllic countryside retreats, Italy promises an unforgettable journey filled with unforgettable experiences. Let us guide you on an adventure through Italy's timeless splendor, where every moment is infused with magic and wonder."
       
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-3xl font-serif tracking-tight text-amber-400 sm:text-4xl">ITINERARY</h2>
      </div>
      <Itinerary days={days} />

     <ImageGrid images={images} heading="Traveler Photos" />
    </div>
     
  );
};
  
  export default Italy ;