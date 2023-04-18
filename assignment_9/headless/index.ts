import { getMovie, getMovies } from "./apiClient";

async function main() {
  const movies = await getMovies();
  const movie = await getMovie(1);

  console.log(movies.data);
  console.log("----------------------");
  console.log("----------------------");
  console.log(movie.data);
}

main();
