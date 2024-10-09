import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

const NavBar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="p-6 bg-yellow-200">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <AiFillDelete /> : <RiMenu2Line />}
      </div>

      <ul
        className={`md:flex absolute duration-1000 md:static ${
          open ? "top-16" : "-top-60"
        } bg-yellow-200 px-6 `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
