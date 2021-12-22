import React from "react";

import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import { Container } from "./layoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
