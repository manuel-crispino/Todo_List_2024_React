import React from "react";
import {Link} from "react-router-dom";
import '../styles/nav.css'
export default function Nav(){
  const NavText: { elements: { route: string; text: string }[] } = {
    elements: [
        { route: "/", text: "Home" },
        { route: "/about", text: "About" },
        { route: "/contacts", text: "Contacts" }
    ]
};

    return (
        <div>
        <nav className="nav">
        <ul className="nav-ul">
          {NavText.elements.map((item:{route:string,text:string},index)=>(
          <li key={index} className="nav-text" >
            <Link to={item.route} >{item.text}</Link>
          </li>))}
        </ul>
      </nav>
      </div>
    )
}