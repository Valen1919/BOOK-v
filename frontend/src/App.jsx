import Header from "./layouts/header/Header";
import Registro from "./components/register/Registro";
import Login from "./components/login/Login";
import Home from "./pages/home/Home";
import Footer from "./layouts/footer/Footer";
import Books from "./components/libros/Books";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Categorias from "./components/Categorias/Categorias";
import LibroDetalle from "./components/VerDetalle/VerDetalle";
import Profile from "./components/Profile/Profile";
import MisLibros from "./components/MisLibros/MisLibros";
import Tienda from "./components/Tienda/Tienda";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route
            path="/register"
            element={
              <>
                <Registro />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/Profile"
            element={
              <>
                <Profile />
              </>
            }
          />
          <Route
            path="/MisLibros"
            element={<MisLibros />}
          />
          <Route
            path="/"
            element={
              <>
                <Books books={Books} />
              </>
            }
          />
          <Route
            path="/Tienda"
            element={
              <>
                <Tienda />
              </>
            }
          />
          <Route
            path="/categorias"
            element={
              <>
                <Categorias />
              </>
            }
          />
          <Route path="/libro/:book_id" component={LibroDetalle}
            element={
              <>
                <LibroDetalle />
              </>
            }
          />
          

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;