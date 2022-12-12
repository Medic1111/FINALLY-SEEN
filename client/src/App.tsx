import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Modal from "./components/Modal/Modal";
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

  const [isAuth, setIsAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoggin, setIsLoggin] = useState(false);

  return (
    <div className="App">
      <Header setShowModal={setShowModal} setIsLoggin={setIsLoggin} />
      {isAuth ? (
        <Portfolio />
      ) : (
        <Home setShowModal={setShowModal} setIsLoggin={setIsLoggin} />
      )}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          isLoggin={isLoggin}
          setIsLoggin={setIsLoggin}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
