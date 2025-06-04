import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StitchDesign } from "./screens/StitchDesign/StitchDesign";
import { CartPage } from "./screens/CartPage";
import { DetailPage } from "./screens/DetailPage";
import { ProfilePage } from "./screens/ProfilePage";
import { ContactPage } from "./screens/ContactPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<StitchDesign />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </StrictMode>
);