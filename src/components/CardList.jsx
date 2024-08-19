import "./CardList.css";
import zodiacData from "../locales/ru.json";
import Card from "./Card.jsx";
export default function CardList() {
  return (
    <div className="zodiacList">
      {zodiacData.map((zodiac, i) => (
        <Card
          key={i}
          name={zodiac.name}
          dateRange={zodiac.dateRange}
          icon={zodiac.icon}
        />
      ))}
    </div>
  );
}
