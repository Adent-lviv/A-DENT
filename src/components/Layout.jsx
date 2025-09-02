import { Outlet } from "react-router-dom";
import Header from "./HeaderAndFooter/Header"; 

import Footer from "./HeaderAndFooter/Footer";
import ScrollToTop from "./BasicComponents/ScrollToTop";

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{minHeight:"100vh"}}>
        <Outlet /> 
      </main>
      <Footer />
      <ScrollToTop />

    </>
  );
}