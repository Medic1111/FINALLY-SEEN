import axios from "axios";
import React, { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Who from "./components/Who/Who";
import Why from "./components/Why/Why";

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

  return (
    <div className="App">
      <Header />
      <Hero />
      <Who />
      <Why />
      <Footer />
    </div>
  );
}

export default App;
