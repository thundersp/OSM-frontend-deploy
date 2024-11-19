// app/layout.js
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

export const metadata = {
  title: "OCDetect",
  description: "Something to detect OCD",
  icons: {
    icon: "https://res.cloudinary.com/dxqh8y7ko/image/upload/c_crop,h_290,w_290/v1731995140/image-removebg-preview_o0lurf.png", // Favicon URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Include Navbar here */}
        {children} {/* Render the page content */}
        <Footer /> {/* Include Footer here */}
        <ToastContainer /> {/* Add ToastContainer here for global toast notifications */}
      </body>
    </html>
  );
}
