import React from "react";
import {Link} from "react-router-dom";
import '../styles/nav.css'
export default function Nav(){

    return (
        <div>
        <nav className="nav">
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      </div>
    )
}