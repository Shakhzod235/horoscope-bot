import "./CardList.css";
import zodiacData from "../locales/en.json";
import Card from "./Card.jsx";
import { Link } from "react-router-dom";
export default function CardList() {
  return (
    <div className="zodiacList">
      {zodiacData.map((zodiac, i) => (
        <Link
          className="link"
          to={"/description/"}
          key={i}
        >
          <Card
            key={i}
            name={zodiac.name}
            dateRange={zodiac.dateRange}
            icon={zodiac.icon}
          />
        </Link>
      ))}
    </div>
  );
}
