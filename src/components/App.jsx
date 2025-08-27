import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout";

const LogIn = lazy(() => import("../pages/LogInPage/LogInPage"));
const Home = lazy(() => import("../pages/HomePage/HomePage"));
const Products = lazy(() => import("../pages/ProductsPage/ProductsPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default App;
