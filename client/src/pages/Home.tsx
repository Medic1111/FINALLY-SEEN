import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Who from "../components/Who/Who";
import Why from "../components/Why/Why";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setIsLoggin: React.Dispatch<React.SetStateAction<boolean>>
}

const Home: React.FC<Props> = ({setShowModal, setIsLoggin}) => {
  return (
    <>
      {/* <Header /> */}
      <Hero setShowModal={setShowModal} setIsLoggin={setIsLoggin} />
      <Who />
      <Why />
    </>
  );
};

export default Home;
