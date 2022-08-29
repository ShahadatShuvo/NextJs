import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="mx-16 mt-8 m-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
