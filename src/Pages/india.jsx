import DestinationIntro from "../Components/DestinationIntro";
  import Herosection from "../Components/Herosection";
  import ImageGrid from "../Components/imagegrid";
  import tajmahal from '../assets/images/tajmahal.jpg';
  import temple from '../assets/images/temple.jpg';
  import indiagallery3 from '../assets/images/indiagallery3.jpg';
  import Itinerary from "../Components/itenary";
  const days = [
    {
      title: 'DDay 1: Arrive in Delhi, India + Welcome dinner',
      description: 'Namaste! Arrive at the Indira Gandhi International Airport. After arriving in India, check in to your hotel and begin your adventure. India is a country with vivid cuisine. Take your time to visit the restaurants in your hotel. Have a welcome dinner with the group.',
    },
    {
      title: 'Day 2: Sightseeing Delhi',
      description: 'Delhi is India’s capital and an ancient city. Its mix of modernity and ancient landmarks makes it one of the most beautiful cities in the world. Local attractions include the Juma Masjid, the Qutub Minar, and Humayun’s tomb.'
    },
    {
      title: 'Day 3: Visiting the Taj Mahal',
      description: 'The Taj Mahal in Agra is one of the worlds seven wonders. The monument is created entirely from marble and is the tomb of Emperor Shah Jahan’s wife. Take pictures and visit the local gift shops for getting your curious.',
    },
    {
      title: 'Day 4: Travel to Jaipur and visit the local attractions.',
      description: 'The pink city of India is famous for its city buildings, which all have a pink texture. The most famous Hawa Mahal and the city palace are Instagram-able places.',
    },
    {
      title: 'Day 5: Free Day and Travel to Kochi, Kerala',
      description: 'The first half of the day is to sleep in after the exhausting sightseeing in Jaipur, and the next half is to take a 2-hour flight to Kochi. Kerala is considered as God’s Own country. Famous for the ayurvedic spa massages and backwater resorts. You are now in the south of India.',
    },
    {
      title: 'Day 6: Athriappally Waterfalls and Fort Kochi',
      description: 'Visit Athirapally waterfalls and visit the rustic town of Fort Kochi, where the British Empire had a formal trade route. Fort Kochi also hosts a year-round art festival called the Biennale, hosting artists from all over India and the world.',
    },
    {
      title: 'Day 7: Travel to Bengaluru and visit the Bengaluru Palace',
      description: 'Take an overnight bus to Bengaluru and visit India’s most amazing climate here. Bengaluru is known for its weather, local food, amazing parties, and shopping. Visit the Bengaluru palace and see the ruling family that once ruled the whole of south India.',
    },
    {
      title: 'Day 8: Enjoy a day in Bengaluru',
      description: 'Take the time to explore the city of Bengaluru. Buy from local shops and experience the local cuisine or cuisine from anywhere in the world',
    },
    {
      title: 'Day 9: Travel to Delhi',
      description: 'Relax a day at hotel and have a wonderful time shopping.',
    },
    {
      title: 'Day 10: Phir Milenge Dosthon!',
      description: 'Pack your bags and head to the airport, to your next destination, home, or maybe another tour with us.',
    },
  ];

  
  
  const images = [
    { src: tajmahal, alt: 'Jet Ski' },
    { src: temple , alt: 'Couples at seashore' },
    { src: indiagallery3, alt: 'Couples at seashore' },
    
  ];
  const India = () => {
      return (
        <div>
          <Herosection 
                    heroImg = "\src\assets\images\Heroimage_india.jpg"
                    
                  />
        <DestinationIntro
          title="Vibrant India"
          duration="10 Day Tour"
          description=" Welcome to the kaleidoscopic land of India, where every corner unveils a tapestry of vibrant cultures, rich heritage, and diverse landscapes. Nestled in the heart of South Asia, India is a mesmerizing mosaic of ancient traditions and modern wonders, beckoning travelers from across the globe. From the snow-capped peaks of the Himalayas to the sun-kissed beaches of Goa, from bustling metropolises like Delhi and Mumbai to serene backwaters of Kerala, India offers an unparalleled journey of discovery and adventure. Immerse yourself in the kaleidoscope of colors, flavors, and experiences that make India a timeless destination cherished by adventurers, cultural enthusiasts, and spiritual seekers alike. Let us be your guide as you embark on an unforgettable odyssey through this enchanting land of contrasts."
         
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h2 className="text-3xl font-serif tracking-tight text-amber-400 sm:text-4xl">ITINERARY</h2>
        </div>
        <Itinerary days={days} />
  
       <ImageGrid images={images} heading="Traveler Photos" />
      </div>
       
    );
  };
    
   
  
 
  
  export default India ;