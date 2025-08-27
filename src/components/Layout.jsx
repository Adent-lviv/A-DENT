import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header"; // твій хедер


export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Тут рендеряться всі сторінки */}
      </main>
    </>
  );
}