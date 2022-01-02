import { useEffect, useState } from "react";

const api = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

export const ImageOfTheDay = () => {
  const [image, setImage] = useState("https://via.placeholder.com/100");
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
    <div>
      <img src={image} alt={imgTitle} />
    </div>
  );
};
