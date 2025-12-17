import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content */}
      <main className="flex-grow pt-24 bg-gradient-to-br from-sky-100 via-slate-100 to-indigo-100">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
