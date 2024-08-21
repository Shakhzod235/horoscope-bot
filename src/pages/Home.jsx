import { useEffect } from "react";
import CardList from "../components/CardList";
import { useTelegram } from "../hooks/useTelegram";

export default function Home() {
  const { tg, onClose, expand } = useTelegram();
  useEffect(() => {
    tg.ready();
    expand();
  }, []);
  onClose;
  return (
    <>
      <CardList />
      <button
        onClick={onClose}
        className="close-btn"
      >
        Закрыть
      </button>
    </>
  );
}
