import "./Card.css";
export default function Card({ name, dateRange, icon }) {
  return (
    <div className="zodiac-card">
      <div className="zodiac-icon">{icon}</div>
      <div className="zodiac-info">
        <h3 className="zodiac-name">{name}</h3>
        <p className="zodiac-date">{dateRange}</p>
      </div>
    </div>
  );
}
