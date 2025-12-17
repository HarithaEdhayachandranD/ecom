import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 p-10 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-3">
              <p><strong>Phone:</strong> 123456789</p>
              <p><strong>Email:</strong> abc@gmail.com</p>
              <p><strong>Address:</strong> 123 Main Street, City, State 12345</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;