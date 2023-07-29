import { useState } from "react";
import "./GradCard.css";
const GradCard = (props) => {
  const [gdColor, setGdColor] = useState("");
  const color = props.colors.map((val) => {
    setGdColor((val) => gdColor + val);
  });
  console.log(gdColor);
  return (
    <div
      className="GradCard"
      style={{
        backgroundImage: `linear-gradient(to right, #bdc3c7 0%, ${gdColor})`,
      }}
    />
  );
};
export default GradCard;
