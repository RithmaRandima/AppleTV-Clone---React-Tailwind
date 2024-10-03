import { Container } from "./components/Container";
import Header from "./components/Header";
import { Hero } from "./components/section/hero";
import { Usps } from "./components/section/usps";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>

        <div>
          <Container className="">3 col layout</Container>
        </div>

        <div>
          <Container className="">Hero poster</Container>
        </div>
      </main>
      ;
    </>
  );
};

export default App;
