import { useState } from "react";
import { getData, getLength } from "../Model.js";
import Card from "../UI/Card";
import LeftIcon from "../Assets/LeftCarouselIcon";
import RightIcon from "../Assets/RightCarouselIcon";
import "./Carousel.css";

const Carousel = (props) => {
  let index = 0;
  const lengthData = getLength();
  const [activeKey, setActiveKey] = useState(3);
  const changePage = (e) => {
    console.log(e.target);
    if (e.target.id === "left") {
      if (activeKey === 0) {
        setActiveKey(lengthData - 1);
        return;
      }
      setActiveKey(activeKey - 1);
      return;
    } else {
      if (activeKey === lengthData - 1) {
        setActiveKey(0);
        return;
      }
      setActiveKey(activeKey + 1);
      return;
    }
  };

  const listItems = props.DATA.map((val) => {
    const colors = getData(index);
    return <Card key={index} val={index++} BG={colors} activeKey={activeKey} />;
  });

  return (
    <div className="Carousel">
      <button onClick={changePage} id="left">
        <LeftIcon />
      </button>
      <ul className="CarouselPath">{listItems}</ul>
      <button onClick={changePage} id="right">
        <RightIcon />
      </button>
    </div>
  );
};
export default Carousel;
