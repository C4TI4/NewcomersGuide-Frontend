import { useState } from 'react'
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Outlet context={searchQuery}/>
      <Footer />
    </>
  );
};

export default Layout;
