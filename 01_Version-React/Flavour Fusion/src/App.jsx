import { Routes, Route, useLocation } from "react-router-dom"
import { createContext, useState } from "react"
import NavbarLanding from "./components/navbar/NavbarLanding"
import NavbarHome from "./components/navbar/NavbarHome"
import FooterLanding from "./components/footer/FooterLanding"
import FooterHome from "./components/footer/FooterHome"
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import CartPage from "./pages/CartPage"

export const ThemeContext = createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const location = useLocation();

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        {location.pathname.startsWith("/home") ? <NavbarHome /> : <NavbarLanding />}
        <Routes>
          <Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/menu" element={<MenuPage />} />
            <Route path="/home/cart" element={<CartPage />} />
          </Route>
        </Routes>
        {location.pathname.startsWith("/home") ? <FooterHome /> : <FooterLanding />}
      </ThemeContext.Provider>
    </>
  );
}
