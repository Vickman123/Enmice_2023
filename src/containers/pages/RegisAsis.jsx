import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react'
import Footer from "componets/navigation/Footer"
import Navbar from "componets/navigation/Navbar"
import RegistroAsis from 'componets/Services/RegistroAsis';
import Layout from 'hocs/layouts/Layout';

function RegisAsis() {
  return (
    <Layout className="min-h-screen">
      <Navbar />
      <div className="pt-28">
        <RegistroAsis style={{marginTop: '2rem'}} />
      </div>
      <Footer style={{marginTop: '2rem'}} />
    </Layout>
  );
}

export default RegisAsis;