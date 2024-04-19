import { Link } from 'react-router-dom';
import Banner from '../Components/Banner'
import ImageGrid from '../Components/imagegrid';
import DealCard from '../Components/dealcard';
import Carousel from '../Components/corousel';


const images = [
  { src: 'https://images.pexels.com/photos/6181060/pexels-photo-6181060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A Couple Walking on the Street' },
  { src: 'https://images.pexels.com/photos/8020680/pexels-photo-8020680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Group picture' },
  { src: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'In motorcyle' },
  { src: 'https://images.pexels.com/photos/3760039/pexels-photo-3760039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'walking on the street' },
  { src: 'https://images.pexels.com/photos/3933896/pexels-photo-3933896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Mother and baby on a boat' },
  { src: 'https://images.pexels.com/photos/5368722/pexels-photo-5368722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Family on a boat' },
];

const cards = [
  {
    imageSrc: 'https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tourLink: 'france.html',
    tourTitle: 'Chic France',
    tourDuration: '10 DAY TOUR',
    tourDescription: 'France with captivating blend of art, history, and gastronomy, boasting iconic landmarks like the Eiffel Tower and stunning landscapes like the French Riviera. From its exquisite cuisine to its rich cultural heritage, France offers an unforgettable experience for every traveler.',
    showPricesAndButton: false,
    originalPrice: null,
    offerPrice: null,
    discount: null,
  },
  {
    imageSrc: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tourLink: 'maldives.html',
    tourTitle: 'Maldives Serenity Retreat',
    tourDuration: '7 DAY TOUR',
    tourDescription: 'Discover paradise in the Maldives, a tropical paradise renowned for its pristine beaches, vibrant coral reefs, and luxurious overwater bungalows. Escape to this idyllic destination for unparalleled relaxation and unforgettable underwater adventures.',
    showPricesAndButton: false,
    originalPrice: null,
    offerPrice: null,
    discount: null,
  },
  {
    imageSrc: 'https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tourLink: 'italy.html',
    tourTitle: 'The Best of Italy',
    tourDuration: '10 DAY TOUR',
    tourDescription: 'Explore Italy\'s timeless beauty with whispers of ancient ruins and Renaissance art, accompanied by tantalizing cuisine that enchants every traveler\'s heart. Italy beckons with a symphony of sights and flavors, promising an unforgettable journey.',
    showPricesAndButton: true,
    originalPrice: null,
    offerPrice: null,
    discount: null,
  },
];

const Home = () => {
    return (
      <div>
        <Banner />
        <Carousel />

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
    <div></div>

        <ImageGrid images={images} heading="Happy Customers" />

        
        
      </div>
    );
  };
  
  export default Home;