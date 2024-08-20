import { useEffect } from "react";
import CardList from "../components/CardList";

const tg = window.Telegram.WebApp;
export default function Home() {
  tg.PopupParams = {};
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  };
  tg.expand();
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
