import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DescriptionContent from "../components/DescriptionContent";
import { useTelegram } from "../hooks/useTelegram";

export default function Description() {
  const navigate = useNavigate();
  const {
    showBackButton,
    hideBackButton,
    handleBackButtonClick,
    BackButtonOnClick,
    BackButtonOffClick,
  } = useTelegram(navigate);

  useEffect(() => {
    showBackButton();

    BackButtonOnClick(handleBackButtonClick);

    return () => {
      hideBackButton();
      BackButtonOffClick(handleBackButtonClick);
    };
  }, []);
  return (
    <>
      <DescriptionContent />
    </>
  );
}
