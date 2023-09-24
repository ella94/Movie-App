import MovieCard, { IMovieCard } from "@/src/components/MovieCard";

const PopularMovies = ({ popularMovies }: { popularMovies: any }) => {
  return (
    <div className="flex flex-col mb-6">
      <h1 className="text-2xl font-semibold">What&apos;s Popular</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {popularMovies.map((movie: IMovieCard) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default PopularMovies;
