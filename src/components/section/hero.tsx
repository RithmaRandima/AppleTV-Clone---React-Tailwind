import { SiAppletv } from "react-icons/si";
import { Button } from "../Button";
import { Container } from "../Container";

import heroImg from "../../../public/posters/Screenshot-2024-01-29-at-17.05.37.jpeg";

export const Hero = () => {
  return (
    <div className="relative bg-background h-[300vh] text-white">
      <div className="absolute top-0 left-0 w-full">
        <img src={heroImg} alt="" />
      </div>
      <Container className="relative z-10 min-h-[--hero-height] flex flex-col justify-end bg-background">
        <h1 className="text-5xl font-bold">
          All Apple Originals. <br /> Only on AppleTV+.
        </h1>
        <Button size="large">Stream now</Button>
        <p className="font-semibold">
          Watch on the <SiAppletv className="inline" /> app.
        </p>
      </Container>
    </div>
  );
};
