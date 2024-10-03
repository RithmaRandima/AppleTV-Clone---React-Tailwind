import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Movie,
  movies,
  randomMovieSet1,
  randomMovieSet2,
} from "../../Data/movies";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { Button } from "../Button";

export const VideoCarousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;

    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [2.8, maximumScale, 1]
  );

  const posterOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive"
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-16">
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] overflow-clip h-[300vh]"
      >
        <div className="h-screen flex items-center sticky top-0">
          <div className="relative flex gap-5 mb-5 left-1/2 -translate-x-1/2">
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXLeft }}
              className="aspect-video shrink-0 w-[60vw] rounded-2xl overflow-clip"
            >
              <img
                className="w-full h-full object-cover"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>

            <motion.div
              style={{ scale }}
              className="aspect-video shrink-0 w-[60vw] rounded-2xl relative z-20 overflow-clip"
            >
              <img
                className="w-full h-full object-cover"
                src={movies[2].poster}
                alt={movies[0].name}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute flex justify-between p-5 text-white text-lg  items-center left-0 bottom-0 w-full"
              >
                <p>Lorem ipsum dolor sit.</p>
                <Button size="large">Watch now</Button>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXRight }}
              className="aspect-video shrink-0 w-[60vw] rounded-2xl overflow-clip"
            >
              <img
                className="w-full h-full object-cover"
                src={movies[3].poster}
                alt={movies[0].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="space-y-3 pt-5 mt-[calc(100vh-(60vw*(16/9)/2))]"
      >
        <SmallVideoCarousel movies={randomMovieSet1} />
        <div className="[--duration:60s] [--carousel-offset,-32px]">
          <SmallVideoCarousel movies={randomMovieSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="animate-carousel-move flex gap-3 relative left-[var(--carousel-offset,0px)]">
        {movies.map((movie, index) => (
          <div
            className="aspect-video w-[25vw] shrink-0"
            key={`movie.name - ${index}`}
          >
            <img
              className="w-full h-full rounded-xl object-cover"
              src={movie.poster}
              alt={movie.poster}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
