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
 // Stato per tenere traccia del link attivo
 const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

 // Funzione che gestisce il click sul link
 const handleActive = (index: number) => {
   setActiveIndex(index);
 };

    return (
        <div>
        <nav className="nav">
        <ul className="nav-ul">
          {NavText.elements.map((item:{route:string,text:string},index)=>(
          <li key={index} className={activeIndex === index ? 'active nav-text' : 'nav-text'} >
            <Link onClick={()=>handleActive(index)} to={item.route} >{item.text}</Link>
          </li>))}
        </ul>
      </nav>
      </div>
    )
}