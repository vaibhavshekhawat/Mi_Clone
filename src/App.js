import './App.css';
import PreNavbar from './components/PreNavbar';
import NavBar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccess from "./components/HotAccess.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js" 
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptions from "./components/NavOptions.js"

const name = "Product";
function App() {
  return (
    <Router>
      <PreNavbar />
      <NavBar />

      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} />

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
      <Route exact path="/music"  element = {<HotAccess music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>
      <Route exact path="/smartDevice"  element = {<HotAccess smartDevice = {data.hotAccessories.smartDevice} smartDeviceCover = {data.hotAccessoriesCover.smartDevice}/>}/>
      <Route exact path="/home"  element = {<HotAccess home = {data.hotAccessories.home} homeCover = {data.hotAccessoriesCover.home}/>}/>
      <Route exact path="/lifestyle"  element = {<HotAccess lifeStyle = {data.hotAccessories.lifeStyle} lifeStyleCover = {data.hotAccessoriesCover.lifeStyle}/>}/>
      <Route exact path="/mobileAccessories"  element = {<HotAccess mobileAccessories = {data.hotAccessories.mobileAccessories} mobileAccessoriesCover = {data.hotAccessoriesCover.mobileAccessories}/>}/>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS" />

      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
