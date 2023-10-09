import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/config";
import { IMovieCard } from "@/src/components/MovieCard";
import { getMovieCasts, getMovieDetails } from "@/src/services/movie.service";
import CastCard, { ICastCard } from "@/src/components/CastCard";

import Image from "next/image";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface IMovieDetails {
  params: {
    id: IMovieCard["id"];
  };
}

const page = async ({ params }: IMovieDetails) => {
  const { id } = params;
  const movie = await getMovieDetails(id);
  const movieCast = await getMovieCasts(id);

  const durationHours = Math.round(movie?.runtime / 60);
  const durationMinutes = Math.round(movie?.runtime % 60);

  return (
    <main className="w-[1300px] max-w-full px-4 mx-auto mt-5">
      <Paper
        elevation={3}
        sx={{
          p: 2,
          margin: "auto",
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Image
              src={
                movie?.poster_path
                  ? `${IMAGE_URL}${movie?.poster_path}`
                  : `${EMPTY_MOVIE_URL}`
              }
              alt={movie?.title}
              width="0"
              height="0"
              sizes="25vh"
              className="w-auto h-full"
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h4" component="div">
                  {movie?.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  {movie?.release_date} |{" "}
                  {movie?.runtime > 0 &&
                    `${durationHours}h ${durationMinutes}m`}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {movie?.genres?.map((genre: any) => (
                    <Chip
                      key={genre.name}
                      label={genre?.name}
                      sx={{ borderColor: "#37474f" }}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Stack>
                <Typography variant="body1" mt={2}>
                  {movie?.overview}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Box sx={{ mt: 3 }}>
        <Grid container>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Top Cast
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            height: 400,
            justifyContent: "space-evenly",
          }}
        >
          {movieCast?.cast.slice(0, 6).map((cast: ICastCard) => (
            <Grid
              item
              key={cast?.id}
              sx={{
                marginBottom: 2,
              }}
            >
              <CastCard cast={cast} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
};

export default page;
