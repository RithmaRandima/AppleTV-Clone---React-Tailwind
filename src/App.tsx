import { Container } from "./components/Container";
import Header from "./components/Header";
import { VideoCarousel } from "./components/section/carousel";
import { Hero } from "./components/section/hero";
import { Usps } from "./components/section/usps";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]"></div>

        <div>
          <Container className="">Hero poster</Container>
        </div>
      </main>
      ;
    </>
  );
};

export default App;
