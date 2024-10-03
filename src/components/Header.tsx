import { FaApple } from "react-icons/fa6";
import { Container } from "./Container";
import { Button } from "./Button";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white relative z-40">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a href="/" className="h-11 flex items-center px-6 -ml-6">
            <FaApple className="text-xl" />
            <span className="sr-only">back to home page</span>
          </a>
        </Container>
      </header>
      <div className="bg-backgroundContrast text-white sticky top-0 z-40">
        <Container className="flex items-center  min-h-[--header-row-height] justify-between">
          <p className="text-xl font-semibold">Apple Tv+ </p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
