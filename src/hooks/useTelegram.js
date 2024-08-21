const tg = window.Telegram.WebApp;

export function useTelegram(navigate) {
  const onClose = () => {
    tg.close();
  };
  const expand = () => {
    tg.expand();
  };
  const showBackButton = () => {
    tg.BackButton.show();
  };
  const hideBackButton = () => {
    tg.BackButton.hide();
  };
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  const BackButtonOnClick = (callback) => {
    tg.BackButton.onClick(callback);
  };
  const BackButtonOffClick = (callback) => {
    tg.BackButton.offClick(callback);
  };
  return {
    tg,
    onClose,
    expand,
    showBackButton,
    hideBackButton,
    handleBackButtonClick,
    BackButtonOnClick,
    BackButtonOffClick,
  };
}
