import React from 'react';

import NavBar from './Navbar';
import Footer from './Footer';

function Layout(props) {
  const style = {
    background: "linear-gradient(to top, #A9F1DF, #FFBBBB)"
  };
  return (
    <div style={style}>
      <NavBar />
      {props.children}
      <Footer className="fixed-bottom" />
    </div>
  );
}

export default Layout;