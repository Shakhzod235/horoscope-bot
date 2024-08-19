import { useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      <CardList />
      <button
        onClick={onClose}
        className="close-btn"
      >
        Закрыть
      </button>
    </div>
  );
}

export default App;
