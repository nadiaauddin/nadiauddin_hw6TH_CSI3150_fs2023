import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero/HeroJS";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";

function App() {
  const places = TravelData.map((items) => {
    return(
      <Hero
        key = {items.id}
        heading = {items.placeHeading}
        img1 = {items.placeImg1}
        img2 = {items.placeImg2}
        img3 = {items.placeImg3}
        description = {items.placeDescription}
      />
    )
  })
  return (
    <div className="App">
      <TravelBlog />
      <section className='hero-parent-container'>
        {places}
      </section>
    </div>
  );
}

export default App;
