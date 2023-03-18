import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
    
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Eduction</Link>
        <Link to={"/Exp"}>Experience</Link>
        <Link to={"/Lang"}>Langauge</Link>
        <Link to={"/Skill"}>Skill</Link>
        <Link to={"/Summ"}>Summary</Link>
        
        <Link to={"/Certificate"}>Certificate</Link>
       
     
      </main>
    </nav>
  );
};

export default Header;
