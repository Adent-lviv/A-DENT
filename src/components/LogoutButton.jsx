import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { LogoutBtn } from "./globalStyles";
import { toast } from "react-toastify";

export default function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Ви успішно вийшли з адмін-панелі");
      navigate("/");
    } catch (err) {
      console.error("Помилка при виході:", err);
        toast.error("Oops! Не вдалося вийти");
    }
  };

  return <LogoutBtn onClick={handleLogout}>Вийти</LogoutBtn>;
}
