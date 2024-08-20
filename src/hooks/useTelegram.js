const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };
  const expand = () => {
    tg.expand();
  };
  return {
    onClose,
    expand,
    tg,
  };
}
