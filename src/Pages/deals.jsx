import Textcontainer from "../Components/Textcontainer";
import SummerSaleSection from "../Components/dealheroimage";
import DealCard from "../Components/dealcard";
const Deals = () => {



  const cards = [
    {
      
      imageSrc: '/src/assets/images/Miami_deals.jpg',
      tourLink: '/registration',
      tourTitle: 'Miami Escape',
      tourDuration: '10 DAY TOUR',
      tourDescription: 'Find your perfect Miami Escape with unbeatable deals and endless fun!',
      showPricesAndButton:true,
      originalPrice: 3900,
      offerPrice: 2925,
      discount: 25,
    },
    {
      imageSrc: '/src/assets/images/Spain_deals.jpg',
      tourLink: '/destination/europe/spain',
      tourTitle: 'Sunny Spain',
      tourDuration: '7 DAY TOUR',
      tourDescription: 'Unveil the warmth of Sunny Spain with our exclusive travel offers!',
      showPricesAndButton:true,
      originalPrice: 3200,
      offerPrice: 2400,
      discount: 25,
    },
    {
      imageSrc: '/src/assets/images/Italy_deals.jpg',
      tourLink: '/destination/europe/italy',
      tourTitle: 'The Best of Italy',
      tourDuration: '10 DAY TOUR',
      tourDescription: 'Explore unparalleled offers for unforgettable Italian adventures!',
      showPricesAndButton:true,
      originalPrice: 3000,
      offerPrice: 2250,
      discount: 25,
    },
  ];


  
  const cards_2 = [
    {
      imageSrc:"/src/assets/images/India_deals.jpg",
      tourLink:"",
          tourTitle:"Vibrant India",
          tourDuration:"10 DAY TOUR",
          showPricesAndButton:true,
          tourDescription:"Explore exclusive offers for unforgettable Indian adventures.",
          discount:10,
          originalPrice:3500,
          offerPrice:3150,
    },
    {
      imageSrc:"/src/assets/images/Vegas_deals.jpg",
      tourLink:"",
      tourTitle:"Vegas Thrills",
      tourDuration:"7 DAY TOUR",
      showPricesAndButton:true,
      tourDescription:"Indulge in the glitz and glamour of Vegas with our exclusive deals!",
      discount:15,
      originalPrice:900,
      offerPrice:765,
    },
    {
      imageSrc:"/src/assets/images/Thailand_deals.jpg",
          tourLink:"thailand.html",
          tourTitle:"Thai Tropical Adventure",
          tourDuration:"5 DAY TOUR",
          showPricesAndButton:true,
          tourDescription:"Uncover the magic of Thailand – where ancient temples meet pristine beaches.",
          discount:20,
          originalPrice:1000,
          offerPrice:800,
    },
  ];


    return (
      <>
      <div>
        <SummerSaleSection />
      </div>
      <div>
     
      <Textcontainer
        Title="Summer Flash Sale"
        Description="Don't miss out on this unbeatable offer. Hurry, the clock is ticking — Shop now and save big!"
        additionalContent="Reserve your tour before May 15th to lock in this special deal."
      />
      
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
            showPricesAndButton={true}
            tourDescription={card.tourDescription}
            originalPrice={card.originalPrice}
            offerPrice={card.offerPrice}
            discount={card.discount}
          />
        ))}
      </div>
    </div>
    <div>
     
      <Textcontainer
        Title="Save on Dream Destinations"
        Description="Discover irresistible deals you won't want to miss out on! View our travel deals below to find an affordable tour that fits your budget, available year-round."
        
      />
      
    </div>


    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
        {cards_2.map((card, index) => (
          <DealCard
            key={index}
            pagetype="default"
            imageSrc={card.imageSrc}
            tourLink={card.tourLink}
            tourTitle={card.tourTitle}
            tourDuration={card.tourDuration}
            showPricesAndButton={true}
            tourDescription={card.tourDescription}
            originalPrice={card.originalPrice}
            offerPrice={card.offerPrice}
            discount={card.discount}
          />
        ))}
      </div>
    </div>
    <div></div>
    </>
    );
  };
  
  export default Deals;