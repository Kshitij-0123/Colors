import Input from "./Input";
import GradCard from "./GradCard";
import { useEffect, useState } from "react";
const GradientCard = (props) => {
  const [colors, setColors] = useState([]);
  const setColor = (id, col) => {
    const arr = [...colors];
    arr[id] = col;
    setColors(arr);
  };
  useEffect(() => {
    console.log(colors);
  }, [colors]);
  return (
    <>
      <Input changeColor={setColor} />
      <GradCard colors={colors} />
    </>
  );
};
export default GradientCard;
