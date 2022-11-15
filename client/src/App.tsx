import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  const fetchTest = async () => {
    await axios
      .get("/api")
      .then((serverRes) => console.log(serverRes.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTest();
  }, []);

  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="App">
      {isAuth ? <Portfolio /> : <Home />}
      {/* <Auth /> */}
      <Footer />
    </div>
  );
}

export default App;
