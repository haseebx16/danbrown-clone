import About from "./Components/About";
import Advantages from "./Components/Advantages";
import Carousel from "./Components/Carousel";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Numbers from "./Components/Numbers";
import Services from "./Components/Services";

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
    </div>
  );
}
