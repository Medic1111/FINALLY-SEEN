import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Who from "./components/Who/Who";
import Why from "./components/Why/Why";
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
      <Footer />
    </div>
  );
}

export default App;
