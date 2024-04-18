import Textcontainer from "../Components/Textcontainer";
import SummerSaleSection from "../Components/dealheroimage";
const Deals = () => {
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
    <div>
     
      <Textcontainer
        Title="Save on Dream Destinations"
        Description="Discover irresistible deals you won't want to miss out on! View our travel deals below to find an affordable tour that fits your budget, available year-round."
        
      />
      
    </div>
    </>
    );
  };
  
  export default Deals;