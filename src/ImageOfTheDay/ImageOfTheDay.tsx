import { useEffect, useState } from "react";

import { AppDefaultDimensions } from "../utils";

// key generated for `sabe12070` via `https://api.nasa.gov/`
const apikey = "1h6fThyqYBoeLlQnG4f0exlaWaY2BSe4uH84oHD2";
const api = `https://api.nasa.gov/planetary/apod?api_key=${apikey}`;

export const ImageOfTheDay = () => {
  const [image, setImage] =
    useState(`https://via.placeholder.com/${AppDefaultDimensions.width}
  `);
  const [imgTitle, setImageTitle] = useState("NASA Image of the Day");
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.url);
        setImageTitle(data.title);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <img
      src={image}
      id="nasa-image"
      alt={imgTitle}
      style={{ width: AppDefaultDimensions.width }}
    />
  );
};
