import About from "./Components/Sections/About";
import Advantages from "./Components/Sections/Advantages";
import Book from "./Components/Sections/Book";
import Carousel from "./Components/Sections/Carousel";
import Hero from "./Components/Sections/Hero";
import Nav from "./Components/Sections/Nav";
import Numbers from "./Components/Sections/Numbers";
import Services from "./Components/Sections/Services";
import Hire from "./Components/Sections/Hire";
import Testimonials from "./Components/Sections/Testimonials";
import Footer from "./Components/Sections/Footer";
import Portfolio from "./Components/Sections/Portfolio";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Carousel/>
      <Advantages/>
      <Services/>
      <Numbers/>
      <Book/>
      <Portfolio/>
      <Hire/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
