import { Link } from 'react-router-dom';
import Banner from '../Components/Banner'
import ImageGrid from '../Components/imagegrid';
import DealCard from '../Components/dealcard';
import Carousel from '../Components/corousel';
import Testimonial from '../Components/testimonials';


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
    imageSrc: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tourLink: '/destination/asia/maldives',
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
    tourLink: '/destination/europe/italy',
    tourTitle: 'The Best of Italy',
    tourDuration: '10 DAY TOUR',
    tourDescription: 'Explore Italy\'s timeless beauty with whispers of ancient ruins and Renaissance art, accompanied by tantalizing cuisine that enchants every traveler\'s heart. Italy beckons with a symphony of sights and flavors, promising an unforgettable journey.',
    showPricesAndButton: false,
    originalPrice: null,
    offerPrice: null,
    discount: null,
    
  },
];

const Home = () => {
    return (
      <div>
      
        <Carousel />


        <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <section class="bg-white rounded overflow-hidden shadow-lg">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 class="mb-4 text-4xl tracking-tight font-bold text-amber-400 text-center ">Why Travel with us</h2>
                  <p class="mb-4 text-base text-black">Welcome to Tripinn, your gateway to unforgettable travel experiences! At Tripinn,
                     we're dedicated to making your dream vacation a reality. With a commitment to accessibility, we strive to offer incredible tours at affordable prices, ensuring that international travel is within reach for everyone. Our innovative approach to travel planning and seamless
                     booking process takes the stress out of vacation planning, allowing you to focus on creating lasting memories. 
                  </p>
                  <p class="mb-4 text-base text-black">From hidden gems off the beaten path to iconic landmarks known worldwide, we'll guide you through every step of your journey, ensuring each moment is filled with excitement and wonder. So pack your bags, leave your worries behind, and let's embark on a journey of discovery together.
                  </p>
              </div>
            </div>
        </section>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-5xl font-serif tracking-tight text-amber-400 sm:text-5xl">Top Destinations</h2>
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
    

        <ImageGrid images={images} heading="Happy Customers" />



        <section className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
                    Hear Straight from Our Travelers
                </h2>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
                    <Testimonial
                        name="Emily Johnson"
                        message="Highly recommend for anyone looking for a hassle-free travel experience. They took care of everything."
                        rating={5}
                    />
                    <Testimonial
                        name="John Doe"
                        message="The itinerary was well-planned, accommodations were fantastic, and the local guides provided insightful knowledge about the destinations. Can't wait to book our next adventure with Tripinn!"
                        rating={4}
                    />
                    <Testimonial
                        name="Ravi Kumar"
                        message="Our Italy adventure was nothing short of magical. Every moment was filled with wonder and delight. Thank you, Tripinn, for crafting an unforgettable journey through Italy!"
                        rating={5}
                    />
                </div>
            </div>
        </section>


        
        
      </div>
    );
  };
  
  export default Home;