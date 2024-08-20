import "./Card.css";
import { useDispatch } from "react-redux";
import { fetchDescription } from "../slices/zodiacSlice";

export default function Card({ name, dateRange, icon }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    const requestData = {
      sign: name,
      language: "translated",
      period: "today",
    };
    dispatch(fetchDescription(requestData));
  };
  return (
    <div
      className="zodiac-card"
      onClick={handleClick}
    >
      <div className="zodiac-icon">{icon}</div>
      <div className="zodiac-info">
        <h3 className="zodiac-name">{name}</h3>
        <p className="zodiac-date">{dateRange}</p>
      </div>
    </div>
  );
}
