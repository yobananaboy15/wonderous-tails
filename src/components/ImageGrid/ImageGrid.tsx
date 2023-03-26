import { IMAGE_BASE_URL } from "@/constants/api";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

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
    <ImageList>
      {images.map(({ imgSrc, text, ID }) => (
        <ImageListItem key={ID}>
          <img loading="lazy" src={`${IMAGE_BASE_URL}${imgSrc}`} />
          <ImageListItemBar title={text} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
