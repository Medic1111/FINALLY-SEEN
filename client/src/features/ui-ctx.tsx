import React, { createContext, useState } from "react";

interface UiType {
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  showHamburger: boolean;
  setShowHamburger: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UiCtx = createContext<UiType>({
  showMobileNav: false,
  setShowMobileNav: () => {},
  showHamburger: false,
  setShowHamburger: () => {},
  showModal: false,
  setShowModal: () => {},
});

const UiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <UiCtx.Provider
      value={{
        showMobileNav,
        setShowMobileNav,
        showHamburger,
        setShowHamburger,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </UiCtx.Provider>
  );
};

export default UiProvider;
