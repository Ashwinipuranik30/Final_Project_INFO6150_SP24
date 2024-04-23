
  import DestinationIntro from "../Components/DestinationIntro";
  import Herosection from "../Components/Herosection";
  import ImageGrid from "../Components/imagegrid";
  import maldives1 from '../assets/images/maldives1.jpg';
  import maldives2 from '../assets/images/maldives2.jpg';
  import maldives3 from '../assets/images/maldives3.jpg';
  import Itinerary from "../Components/itenary";
  const days = [
    {
      title: 'Day 1: Welcome to Maldives',
      description: 'Arrive in the Maldives at Velana International Airport. Check into Taj Resort in Maldives and enjoy the welcome dinner with the group.',
    },
    {
      title: 'Day 2: Explore and enjoy',
      description: 'Explore the local cuisine, the fish market, snorkeling and take it easy at the beaches enjoying water rides.',
    },
    {
      title: 'Day 3: Visit the Male fish market and Grand Friday Mosque',
      description: 'The male fish market boasts some of the greatest fishermen and their catches for the day. After the 2 hours spent here, the next location is the Grand Friday Mosque located at the center of the Male city. This monument is worth 30 minutes to 1 hour of your time.',
    },
    {
      title: 'Day 4: Underwater ride',
      description: 'Go for water safari - spot turtles, dolphins, and sharks. Followed by candle light dinner at night with a beautiful view.',
    },
    {
      title: 'Day 5: Ukulhas',
      description: 'Embark on a day of sun-soaked relaxation and exploration in Ukulhas, Maldives, starting with a leisurely stroll along pristine beaches, followed by snorkeling in crystal-clear waters, and ending with a delicious seafood dinner under the stars.',
    },
    {
      title: 'Day 6: Cultural Delights and Historic Wonders in Kyoto',
      description: 'Experience the cultural richness of Kyoto with visits to iconic landmarks such as Kinkaku-ji Temple, Fushimi Inari Shrine, and the historic Gion district, followed by a traditional tea ceremony and a leisurely stroll through Kyotos charming streets.',
    },
    {
      title: 'Day 7: Dhanee!',
      description: 'Pack your bags and head to the airport, to your next destination, home, or maybe another tour with us.',
    },
    
  ];

  
  
  const images = [
    { src: maldives1, alt: 'Jet Ski' },
    { src: maldives2 , alt: 'Couples at seashore' },
    { src: maldives3, alt: 'Couples at seashore' },
    
  ];
  const Maldives = () => {
      return (
        <div>
          <Herosection 
                    heroImg = "\src\assets\images\Heroimage_maldives.jpg"
                    title = "Maldives"
                  />
        <DestinationIntro
          title="Maldives Serenity Retreat"
          duration="7 Day Tour"
          description=" Welcome to the enchanting archipelago of the Maldives, where turquoise waters meet powdery white sands, and luxury merges seamlessly with natural beauty. Nestled in the heart of the Indian Ocean, the Maldives is a paradise like no other, boasting a mesmerizing array of overwater bungalows, vibrant coral reefs teeming with marine life, and sun-kissed beaches that beckon travelers to unwind in blissful serenity. Whether you seek romantic seclusion, thrilling water sports adventures, or simply yearn for a tranquil escape from the hustle and bustle of everyday life, the Maldives promises an unforgettable journey filled with unforgettable moments. Dive into the azure depths, bask in the warmth of the tropical sun, and immerse yourself in the unparalleled luxury of this idyllic destination. Let us be your guide to discovering the magic of the Maldives, where dreams become reality and memories are made to last a lifetime."
         
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h2 className="text-3xl font-serif tracking-tight text-amber-400 sm:text-4xl">ITINERARY</h2>
        </div>
        <Itinerary days={days} />
  
       <ImageGrid images={images} heading="Traveler Photos" />
      </div>
       
    );
  };
    
   
  
  export default Maldives ;