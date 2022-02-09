import Contact from './Contact/Contact';
import Features from './Features/Features';
import Gallery from './Gallery/Gallery';
import Items from './Items/items';
import Navbar from './Navbar/Navbar';


function HomePage() {
  return (
    <div className="Home">
      <Navbar/>
      <Features />
      <Items />
      <Gallery />
      <Contact />
    </div>
  );
}

export default HomePage;
