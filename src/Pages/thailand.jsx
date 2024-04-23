
   
  import DestinationIntro from "../Components/DestinationIntro";
  import Herosection from "../Components/Herosection";
  import ImageGrid from "../Components/imagegrid";
  import thailand1 from '../assets/images/thailand1.jpg';
  import thailand2 from '../assets/images/thailand2.jpg';
  import thailand3 from '../assets/images/thailand3.jpg';
  import Itinerary from "../Components/itenary";

  const days = [
    {
      title: 'Day 1: Welcome!',
      description: 'Arive at the hotel and mmet the fellow travelers and tour guide. Enjoy an amazing dinner with local cuisine.',
    },
    {
      title: 'Day 2: Meeting Elephants in Chiang Mai',
      description: 'Visit Chiang Mai, meet elephants in a sanctuary, and see beautiful waterfalls and forests.',
    },
    {
      title: 'Day 3: Exploring Chiang Mais Culture',
      description: 'Learn about Thai culture by visiting temples, trying Thai cooking, and shopping in local markets.',
    },
    {
      title: 'Day 4: Relaxing on Koh Samuis Beaches',
      description: 'Relax on Koh Samuis beautiful beaches, swim in the clear water, and enjoy seafood by the sea and experiencing the lively nightlife.',
    },
    {
      title: 'Day 5: Tropical Paradise in Phuket!',
      description: 'End your trip in Phuket. And by evening pack your bags and head to the airport, to your next destination.',
    },
  ];

 
  const images = [
    { src: thailand1, alt: 'Temple' },
    { src: thailand2 , alt: 'Island' },
    { src: thailand3, alt: 'Street food' },
    
  ];
  const Thailand = () => {
      return (
        <div>
          <Herosection 
                    heroImg = "\src\assets\images\Heroimage_thailand.jpg"
                    
                  />
        <DestinationIntro
          title="Thai Tropical Adventure"
          duration="5 Day Tour"
          description="  Welcome to the land of smiles, where ancient traditions blend seamlessly with modern marvels, and vibrant culture dances alongside serene landscapes. Thailand, a treasure trove of enchanting experiences, invites you on a journey of discovery like no other. From the bustling streets of Bangkok, where towering skyscrapers harmonize with ornate temples, to the idyllic beaches of Phuket and Koh Samui, where crystal-clear waters lap against powder-soft sands, Thailand captivates every traveler's heart. Immerse yourself in the rich tapestry of Thai cuisine, tantalizing the taste buds with its bold flavors and aromatic spices. Explore the lush jungles of Chiang Mai, home to ancient ruins and hill tribe communities, or embark on a spiritual odyssey to the sacred sites of Ayutthaya and Sukhothai, where history whispers through time. Whether you seek adventure, relaxation, or cultural immersion, Thailand promises an unforgettable experience, where every moment unveils a new facet of its mesmerizing charm. Let Thailand be your canvas for unforgettable memories and embark on a journey of a lifetime with our travel agency."
        />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-3xl font-serif tracking-tight text-amber-400 sm:text-4xl">ITINERARY</h2>
      </div>
      <Itinerary days={days} />
       <ImageGrid images={images} heading="Traveler Photos" />
      </div>
       
    );
  };
    
  
  

  
  export default Thailand ;