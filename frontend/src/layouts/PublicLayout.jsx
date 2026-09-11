import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PublicLayout() {
  return (
    <div className="public-layout">

      {/* SINGLE NAVBAR */}
      <Navbar />

      {/* PUBLIC PAGE CONTENT */}
      <main className="public-content">
        <Outlet />
      </main>

      {/* SINGLE FOOTER */}
      <Footer />

    </div>
  );
}

export default PublicLayout;