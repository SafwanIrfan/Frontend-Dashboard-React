import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
   chat: false,
   cart: false,
   userProfile: false,
   notification: false,
};

const productQuantity = [1, 1, 1];

export const ContextProvider = ({ children }) => {
   const [activeMenu, setActiveMenu] = useState(true);
   const [quantity, setQuantity] = useState(productQuantity);
   const [screenSize, setScreenSize] = useState(undefined);
   const [currentColor, setCurrentColor] = useState("#03C9D7");
   const [currentMode, setCurrentMode] = useState("Light");
   const [themeSettings, setThemeSettings] = useState(false);
   const [cartOpen, setCartOpen] = useState(false);
   const [chatOpen, setChatOpen] = useState(false);
   const [notiOpen, setNotiOpen] = useState(false);
   const [profileOpen, setProfileOpen] = useState(false);
   const [count, setCount] = useState(1);

   const setMode = (e) => {
      setCurrentMode(e.target.value);
      localStorage.setItem("themeMode", e.target.value);
      setThemeSettings(false);
   };
   const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem("colorMode", color);
      setThemeSettings(false);
   };

   return (
      <StateContext.Provider
         value={{
            activeMenu,
            setActiveMenu,
            quantity,
            setQuantity,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            themeSettings,
            setThemeSettings,
            setColor,
            setMode,
            cartOpen,
            setCartOpen,
            chatOpen,
            setChatOpen,
            notiOpen,
            setNotiOpen,
            count,
            setCount,
            profileOpen,
            setProfileOpen,
         }}
      >
         {children}
      </StateContext.Provider>
   );
};

export const useStateContext = () => useContext(StateContext);
