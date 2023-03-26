import { IMAGE_BASE_URL } from "@/constants/api";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

type Image = {
  text: string;
  imgSrc: string;
  ID: number;
};

type ImageGridProps = {
  images: Image[];
};

export const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      {images.map(({ imgSrc, text, ID }) => (
        <Grid sx={{ maxWidth: 300 }}>
          <Box
            component="img"
            loading="lazy"
            src={`${IMAGE_BASE_URL}${imgSrc}`}
            sx={{ objectFit: "cover", maxWidth: "100%" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};
