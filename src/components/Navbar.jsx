import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { Chat, Cart, Notification, UserProfile } from ".";
import avatar from "../data/avatar.jpg";

const Navbar = () => {
   const {
      setActiveMenu,
      screenSize,
      setScreenSize,
      currentColor,
      cartOpen,
      setCartOpen,
      chatOpen,
      setChatOpen,
      notiOpen,
      setNotiOpen,
      profileOpen,
      setProfileOpen,
   } = useStateContext();

   useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   useEffect(() => {
      if (screenSize <= 900) {
         setActiveMenu(false);
      } else {
         setActiveMenu(true);
      }
   }, [screenSize]);

   const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
      <TooltipComponent content={title} position="BottomCenter">
         <button
            type="button"
            onClick={customFunc}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
         >
            <span
               style={{ background: dotColor }}
               className="absolute inline-flex rounded h-2 w-2 right-2 top-2"
            />
            {icon}
         </button>
      </TooltipComponent>
   );

   return (
      <div className="flex justify-between p-2 md:mx-6 relative">
         <NavButton
            title="Menu"
            customFunc={() =>
               setActiveMenu((prevActiveMenu) => !prevActiveMenu)
            }
            color={currentColor}
            icon={<AiOutlineMenu />}
         />
         <div className="flex">
            <NavButton
               title="Cart"
               customFunc={() => {
                  setCartOpen((prevOpenCart) => !prevOpenCart);
                  setChatOpen(false);
                  setNotiOpen(false);
               }}
               color={currentColor}
               icon={<FiShoppingCart />}
            />
            <NavButton
               title="Chat"
               customFunc={() => {
                  setChatOpen((prevChatOpen) => !prevChatOpen);
                  setNotiOpen(false);
                  setProfileOpen(false);
               }}
               color={currentColor}
               dotColor="#03C9D7"
               icon={<BsChatLeft />}
            />
            <NavButton
               title="Notifications"
               customFunc={() => {
                  setNotiOpen((prevNotiOpen) => !prevNotiOpen);
                  setProfileOpen(false);
                  setChatOpen(false);
               }}
               color={currentColor}
               dotColor="#03C9D7"
               icon={<RiNotification3Line />}
            />
            <TooltipComponent content="Profile" position="BottomCenter">
               <div
                  className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                  onClick={() => {
                     setProfileOpen((prevOpenCart) => !prevOpenCart);
                     setChatOpen(false);
                     setNotiOpen(false);
                  }}
               >
                  <img
                     alt="avatar"
                     src={avatar}
                     className="rounded-full w-8 h-8"
                  />
                  <p>
                     <span className="text-14 text-gray-400">Hi, </span>
                     <span className="text-14 text-gray-400 font-bold ml-1">
                        Michael
                     </span>
                  </p>
                  <MdKeyboardArrowDown className="text-14 text-gray-400" />
               </div>
            </TooltipComponent>
            {cartOpen && <Cart />}
            {chatOpen && <Chat />}
            {notiOpen && <Notification />}
            {profileOpen && <UserProfile />}
         </div>
      </div>
   );
};

export default Navbar;
