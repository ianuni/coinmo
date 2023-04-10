import React from 'react'
import "./footer.css"

function Footer({children}) {
  return (
    <footer>
        {children}
        <div className="footer"></div>
    </footer>
  );
}

export default Footer