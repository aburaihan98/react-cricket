import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/headers/Hero";
import Navbar from "./components/headers/Navbar";
import NavItems from "./components/headers/NavItems";
import Main from "./components/main/Main";

function App() {
  const [coin, setCoin] = useState(0);
  const [items, setItems] = useState(false);
  // Claim Free Credit
  const handleClaimFreeCredit = (newCoin) => {
    setCoin(coin + newCoin);
    toast.success("Credit Added to your Account", {
      position: "top-center",
    });
  };

  // Decrement Coin
  const handleDecrementCoin = (decrementPrice) => {
    // Decrement coin validation
    const remainingDecrementPrice = coin - decrementPrice;
    if (remainingDecrementPrice < 0) {
      return;
    }
    setCoin(remainingDecrementPrice);
  };

  // handle Nav Items
  const handleNavItems = () => {
    setItems(!items);
  };

  return (
    <>
      <Navbar handleNavItems={handleNavItems} coin={coin}></Navbar>
      {items && <NavItems></NavItems>}
      <Hero handleClaimFreeCredit={handleClaimFreeCredit}></Hero>
      <Main coin={coin} handleDecrementCoin={handleDecrementCoin}></Main>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
