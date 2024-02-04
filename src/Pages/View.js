import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (state && state.name && state.description) {
      alert(`Name: ${state.name}\nDescription: ${state.description}`);
      navigate("/");
    }
  }, [state, navigate]);

  return null;
};

export default View;
