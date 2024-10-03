export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  {
    poster: "../public/posters/10-must-watch-shows-on-apple-tv-001.jpg",
    name: "a",
  },
  {
    poster:
      "../public/posters/best-tv-series-coming-to-apple-tv-june-2023.avif",
    name: "aa",
  },
  {
    poster: "../public/posters/10-must-watch-shows-on-apple-tv-001.jpg",
    name: "aaa",
  },
  {
    poster: "../public/posters/10-must-watch-shows-on-apple-tv-001.jpg",
    name: "aaaa",
  },
  {
    poster: "../public/posters/10-must-watch-shows-on-apple-tv-001.jpg",
    name: "aaaaa",
  },
  {
    poster: "../public/posters/Screenshot-2024-01-29-at-17.05.37.jpeg",
    name: "aaaaaa",
  },
];

export const randomMovieSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMovieSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
