import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>


<NavLink to="/">Home</NavLink>
<NavLink to="/Movies">Movies</NavLink>
<NavLink to="/Directors">Directors</NavLink>
<NavLink to="/Actors">Actors</NavLink>


  </div>;
}

export default NavBar;
