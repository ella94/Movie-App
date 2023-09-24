"use client";
import { useEffect, useState } from "react";
import PopularMovies from "@/src/components/PopularMovies";
import { getMovies } from "@/src/services/movie.service";
import { Pagination } from "@mui/material";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movieCard, setMovieCard] = useState([]);

  const handleChange = (event, page) => {
    setCurrentPage(page);
  };

  const getPopularMovies = async () => {
    const popularMovies = await getMovies("popular", currentPage);

    setTotalPages(
      popularMovies.total_pages > 500 ? 500 : popularMovies.total_pages
    );
    setMovieCard(popularMovies.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, [currentPage]);

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <PopularMovies popularMovies={movieCard} />
      </div>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "15px 0",
        }}
      />
    </main>
  );
}
