import "./DescriptionContent.css";
import { useSelector } from "react-redux";

export default function DescriptionContent() {
  const description = useSelector((state) => state.zodiac.description);
  return (
    <>
      {description && (
        <div className="zodiac-description-wrapper">
          <div className="zodiac-description">{description.horoscope}</div>
        </div>
      )}
    </>
  );
}
