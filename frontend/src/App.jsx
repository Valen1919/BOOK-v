import Header from "./layouts/header/Header";
import Registro from "./components/register/Registro";
import Login from "./components/login/Login";
import Home from "./pages/home/Home";
import Footer from "./layouts/footer/Footer";
import Books from "./components/libros/Books";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Categorias from "./components/Categorias/Categorias";
import LibroDetalle from "./components/VerDetalle/VerDetalle";

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
                <Registro/>
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
            path="/"
            element={
              <>
              
                <Books books={Books}/>
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
          <Route
          path="/libro/id" component={LibroDetalle}
          element={
            <>
              <LibroDetalle />
            </>
          }
        />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;