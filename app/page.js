import About from "./Components/About";
import Carousel from "./Components/Carousel";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Carousel/>
    </div>
  );
}
