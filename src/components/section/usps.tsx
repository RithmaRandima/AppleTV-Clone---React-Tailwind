import { Container } from "../Container";
import { FadeIn } from "../fade-in";
import { UspsColBox } from "../usps-col-box";
import { packageData } from "../../Data/featureData";

export const Usps = () => {
  return (
    <div className="py-36 space-y-28  text-4xl font-bold">
      <Container className="z-[20] text-white space-y-12 max-w-[692px]">
        <FadeIn>
          <p>New Apple Originals every month — always ad‑free.</p>
        </FadeIn>
        <FadeIn>
          <p>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            Watch in 4K HDR video with immersive Spatial Audio.1 Share a single
            sub
          </p>
        </FadeIn>
        <FadeIn>
          <p>Share a single subscription with up to five people.</p>
        </FadeIn>
      </Container>
      <Container className="text-white">
        <FadeIn>
          <div className="flex justify-between gap-5">
            {packageData.map((data) => (
              <UspsColBox
                title={data.title}
                subTitle={data.subTitle}
                description={data.description}
                key={data.id}
                btnText={data.btnText}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};
