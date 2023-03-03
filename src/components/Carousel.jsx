import { useState } from "react";
import Card from "./Card"
import classes from "./Styles.module.css"

const rightArrow = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" /></svg>
const leftArrow = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" /></svg>


const Carousel = props => {
    let index = 0;
    const [activeKey, setActiveKey] = useState(3);
    const changePage = e => {
        if (e.target.id === "l") {
            if (activeKey === 0) {
                setActiveKey(props.DATA.length - 1);
                return;
            }
            setActiveKey(activeKey - 1);
            return;
        }
        else {
            if (activeKey === props.DATA.length - 1) {
                setActiveKey(0);
                return;
            }
            setActiveKey(activeKey + 1);
            return;
        }
    }
    const listItems = props.DATA.map(val => {
        return <Card key={index} val={index++} BG={{ bh: val["bh"], ah: val["ah"] }} activeKey={activeKey} />
    });
    console.log(props.DATA.length - 1);
    return (
        <div className={classes.Carousel}>
            <button onClick={changePage} id="l">{leftArrow}</button>
            <ul className={classes.CarouselPath}>
                {listItems}
            </ul>
            <button onClick={changePage} id="r">{rightArrow}</button>
        </div>
    )
}
export default Carousel