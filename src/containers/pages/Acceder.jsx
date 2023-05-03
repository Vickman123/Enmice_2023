import React from 'react';
import Layout from "hocs/layouts/Layout";
import Acceder1 from "componets/Acceder/Acceder1";
import Menu from "componets/Acceder/Menu";
import Footer from "componets/navigation/Footer";
import Navbar from "componets/navigation/Navbar";

export default function Acceder() {
  return (
    <Layout>
          <Navbar />
          <Menu />
      <Footer />
    </Layout>
  );
}