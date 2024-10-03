import { Container } from "./components/Container";
import Header from "./components/Header";
import { Hero } from "./components/section/hero";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <div>
          <Container className="">Usps</Container>
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
