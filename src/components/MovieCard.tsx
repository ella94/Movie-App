import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/config";

import { Avatar, Box, Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export interface IMovieCard {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const MovieCard = ({ movie }: { movie: IMovieCard }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={`/movie/${movie?.id}`}>
        <Box sx={{ position: "relative" }}>
          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{
              position: "absolute",
              width: "100%",
              color: "white",
              padding: "10px",
            }}
          >
            <Avatar
              sx={{ bgcolor: "green" }}
              aria-label="vote_average"
              variant="rounded"
            >
              {movie?.vote_average.toFixed(1)}
            </Avatar>
          </Box>
          <CardMedia
            component="img"
            height="140"
            image={
              movie?.poster_path
                ? `${IMAGE_URL}${movie?.poster_path}`
                : `${EMPTY_MOVIE_URL}`
            }
            alt={movie?.title}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              color: "white",
              padding: "10px",
            }}
          >
            <Typography variant="h5"> {movie?.title}</Typography>
            <Typography variant="body2">{movie?.release_date}</Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
