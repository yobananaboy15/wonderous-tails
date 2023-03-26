import { IMAGE_BASE_URL } from "@/constants/api";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
        <Grid sx={{ maxWidth: 350 }} key={ID}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              component="img"
              loading="lazy"
              src={`${IMAGE_BASE_URL}${imgSrc}`}
              sx={{ objectFit: "cover", maxWidth: "100%" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{text}</Typography>
              <Button>Add</Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
