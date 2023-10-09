import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/config";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export interface ICastCard {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const CastCard = ({ cast }: { cast: ICastCard }) => {
  return (
    <Card sx={{ maxWidth: 180, height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={
            cast?.profile_path
              ? `${IMAGE_URL}${cast?.profile_path}`
              : `${EMPTY_MOVIE_URL}`
          }
          alt={cast?.name}
        />
        <CardContent>
          <Typography variant="body1">{cast?.name}</Typography>
          <Typography variant="body2">{cast?.character}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CastCard;
