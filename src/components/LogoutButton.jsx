import { signOut } from "firebase/auth";
import { auth } from "../api/firebase"; // шлях до твого firebase.js
import { useNavigate } from "react-router-dom";
import { LogoutBtn } from "./globalStyles";

export default function LogoutButton() {

      const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
    navigate("/");
    } catch (err) {
      console.error("Помилка при виході:", err);
    }
  };

  return (
    <LogoutBtn onClick={handleLogout}>
      Вийти
    </LogoutBtn>
  );
}
