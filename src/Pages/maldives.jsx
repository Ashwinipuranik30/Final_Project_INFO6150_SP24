
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
      description: 'he male fish market boasts some of the greatest fishermen and their catches for the day. After the 2 hours spent here, the next location is the Grand Friday Mosque located at the center of the Male city. This monument is worth 30 minutes to 1 hour of your time.',
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
      description: 'Pack your bags and head to the airport, to your next destination, home, or maybe another tour with us',
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
                    
                  />
        <DestinationIntro
          title="Maldives Serenity Retreat"
          duration="7 Day Tour"
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
    
   
  
  export default Maldives ;