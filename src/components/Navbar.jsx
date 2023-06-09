import React, { useState } from "react";
import logo2 from "../assets/logo2.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
 
  const menuOptions = [
    { 
      
      text:<Link to ='/'>Inicio</Link>,
      icon: <HomeIcon />,
    },
    {
      text:<Link to ='/Profile'>Perfil</Link> ,
      icon: <AccountCircleIcon  />,
    },
    {
      text: <Link to ='/CrearCuenta'>Registrarse</Link>,
      icon: <CommentRoundedIcon />,
    },
    {
      text: <Link to ='/Login'>Iniciar sesión</Link>,
      icon: <HowToRegIcon />,
    },
    {
      text: <Link to ='/Listado'>Tienda</Link> ,
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <Link to ='/'>
        <img src={logo2} alt="" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link to ='/'>
        <a href="">Home</a>
        </Link>
        <Link to ='/Profile'>
          <a href="">Perfil</a>
        </Link>
        <Link to ='/CrearCuenta'>
           <a href="">Registrarse</a>
        </Link>
        <Link to ='/Login'>
           <a href="">Iniciar sesión</a>
        </Link>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <Link to ='/Listado'>
           <button className="primary-button">Tienda</button>
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    
    </nav>
  );
};

export default Navbar;
