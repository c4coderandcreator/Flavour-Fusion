import { Navbar, Footer } from "../components";
import { Reviews, Orders, ContentSections } from "./Home/index";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center">
        {/* Navbar */}
        <Navbar />
        {/* Content Section */}
        <ContentSections />
        {/* Orders Section */}
        <Orders />
        {/* Reviews Section */}
        <Reviews />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
