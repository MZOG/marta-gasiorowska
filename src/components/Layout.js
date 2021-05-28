import * as React from "react";

// components
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* footer */}
    </>
  );
}
