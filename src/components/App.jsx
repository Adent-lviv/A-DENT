import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout";
import { ToastContainer } from "react-toastify";
import { RiseLoader } from "react-spinners";
import { MainLoaderWrapper } from "./globalStyles";

const LogIn = lazy(() => import("../pages/LogInPage/LogInPage"));
const Home = lazy(() => import("../pages/HomePage/HomePage"));
const Products = lazy(() => import("../pages/ProductsPage/ProductsPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<MainLoaderWrapper> <RiseLoader color="#ee1c27" size={30} /></MainLoaderWrapper>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<LogIn />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  );
}

export default App;
