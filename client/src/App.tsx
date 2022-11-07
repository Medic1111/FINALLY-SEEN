import axios from "axios";
import React, { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
      <Footer />
    </div>
  );
}

export default App;
