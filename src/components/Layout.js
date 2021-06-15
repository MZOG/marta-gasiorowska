import * as React from "react";

// components
import Header from "./Header";
import Footer from "./Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <MessengerCustomerChat
        pageId="101727995436887"
        appId="1483414731990202"
      />
      <Footer />
    </>
  );
}
