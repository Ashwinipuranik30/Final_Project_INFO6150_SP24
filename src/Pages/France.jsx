
  import DestinationIntro from "../Components/DestinationIntro";
  import Herosection from "../Components/Herosection";
  import ImageGrid from "../Components/imagegrid";
  import Francegallery1 from '../assets/images/Francegallery1.jpg';
  import Francegallery2 from '../assets/images/Francegallery2.jpg';
  import Francegallery3 from '../assets/images/Francegallery3.jpg';
  import Itinerary from "../Components/itenary";

  const days = [
    {
      title: 'Day 1: Overnight Flight to France',
      description: 'Book your overnight flight to France and arrive at Charles De Gaulle Airport. Romance and Croissants await your arrival.',
    },
    {
      title: 'Day 2: Welcome to Paris',
      description: 'Enjoy a full day to explore the “City of Light,” known in the world for its fashion, art, museums, cuisine, and joie de vivre. Enjoy included sightseeing with a local expert to see many of the best-known Parisian iconic sights.',
    },
    {
      title: 'Day 3: Tour around Paris',
      description: 'Visit the Louvre, walk around the amazing city of Paris, and walk down the Avenues des Champs-Elysees, known for its theaters and cafes.',
    },
    {
      title: 'Day 4: Chateaux County',
      description: 'Drive along the Brittany coast to the fortified seaside resort of St. Malo to admire its cathedral and ancient walls. Later, visit Rennes with its traditional, timber-framed houses, then reach the enchanting Châteaux Country. At evening visit the amazing Eiffel Tower.',
    },
    {
      title: 'Day 5: Au revoir les amis!',
      description: 'Pack your bags and head to the airport, to your next destination, home, or maybe another tour with us.',
    },
  ];


  const images = [
    { src: Francegallery1, alt: 'Couple In Paris' },
    { src: Francegallery2 , alt: 'Eiffel Tower' },
    { src: Francegallery3, alt: 'Traveler' },
    
  ];
  const France = () => {
      return (
        <div>
          <Herosection 
                    heroImg = "\src\assets\images\Heroimage_france.jpg"
                    title ="France"
                  />
        <DestinationIntro
          title="Chic France"
          duration="5 Day Tour"
          description=" Discover the timeless allure of France, a country where every corner tells a story of art, culture, and romance. Nestled in the heart of Europe, France is renowned for its iconic landmarks, exquisite cuisine, and picturesque landscapes. From the vibrant streets of Paris, adorned with elegant boulevards and iconic landmarks like the Eiffel Tower and Louvre Museum, to the sun-kissed vineyards of Bordeaux and the breathtaking coastline of the French Riviera, France offers an unparalleled blend of sophistication and natural beauty. Immerse yourself in the rich tapestry of history as you explore charming medieval villages, majestic châteaux, and scenic countryside vistas. Whether you seek culinary delights, cultural treasures, or simply a leisurely stroll along the Seine River, France beckons with endless possibilities for unforgettable experiences. Let us be your guide as you embark on an enchanting journey through the enchanting land of joie de vivre."
        />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-3xl font-serif tracking-tight text-amber-400 sm:text-4xl">ITINERARY</h2>
      </div>
      <Itinerary days={days} />
       <ImageGrid images={images} heading="Traveler Photos" />
      </div>
       
    );
  };
    
  
  
  export default France ;