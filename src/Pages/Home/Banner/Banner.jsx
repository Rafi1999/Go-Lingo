import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.postimg.cc/15SJtb4c/top-10-languages-used-on-the-internet.png" />
            </div>
            <div>
                <img src="https://i.postimg.cc/wvmPLJhC/032723-ec-language-brain-differences-feat.jpg" />
            </div>
            
            <div>
                <img src="https://en-languages.tau.ac.il/sites/en-languages.tau.ac.il/files/en-languages/styles/og_image/public/Languages.jpg?itok=IP7s-TGc" />
            </div>
            
        </Carousel>
    );
};

export default Banner;