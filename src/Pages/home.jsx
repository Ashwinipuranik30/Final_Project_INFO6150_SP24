import { Link } from 'react-router-dom';
import Banner from '../Components/Banner'
import ImageGrid from '../Components/imagegrid';


const images = [
  { src: 'https://images.pexels.com/photos/6181060/pexels-photo-6181060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A Couple Walking on the Street' },
  { src: 'https://images.pexels.com/photos/8020680/pexels-photo-8020680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Group picture' },
  { src: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'In motorcyle' },
  { src: 'https://images.pexels.com/photos/3760039/pexels-photo-3760039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'walking on the street' },
  { src: 'https://images.pexels.com/photos/3933896/pexels-photo-3933896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Mother and baby on a boat' },
  { src: 'https://images.pexels.com/photos/5368722/pexels-photo-5368722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Family on a boat' },
];

const Home = () => {
    return (
      <div>
        <Banner />

        <ImageGrid images={images} heading="Happy Customers" />

        
        
      </div>
    );
  };
  
  export default Home;