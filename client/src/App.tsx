import axios from "axios";
import React, { useEffect, useContext } from "react";
import { AuthCtx } from "./features/auth-ctx";
import Footer from "./components/FooterComps/Footer/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import { UiCtx } from "./features/ui-ctx";

function App() {
  const authMgr = useContext(AuthCtx);
  const uiMgr = useContext(UiCtx);

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
      {authMgr.isAuth ? <Portfolio /> : <Home />}
      {uiMgr.showModal && <Modal />}
      <Footer />
    </div>
  );
}

export default App;
