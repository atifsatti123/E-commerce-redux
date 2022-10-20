import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import  Images from '../Images/cart.gif';
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { DLT } from "./service/actions/Action";

const Header = () => {

  const [price,setPrice] = useState()
  console.log(price);
  const getdata = useSelector((state)=> state.Cartreducer.carts);
  console.log(getdata)

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id)=>{
    dispatch(DLT(id))
  }

  const total = ()=>{
    let price = 0;
    getdata.map((ite,k)=>{
      price = ite.price * ite.qnty + price
    });
    setPrice(price);
  };

  useEffect(()=> {
    total();
  },[total])
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            />
          </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
            getdata.length ?
              <div className="card_details" style={{width:"24rem",padding:10}}>
                <Table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Restaurant Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map((i)=> {
                                return (
                                    <>
                                    <tr>
                                        <td>
                                            <NavLink to={`/cart/${i.id}`} onClick={handleClose}>
                                            <img src={i.imgdata} style={{width:"5rem",height:"5rem"}}/>
                                              </NavLink>
                                        </td>
                                        <td>
                                            <p>{i.rname}</p>
                                            <p>Price : ₨{i.price}</p>
                                            <p>Quantity : {i.qnty}</p>
                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} >
                                                <i className="fas fa-trash smalltrash"></i>
                                            </p>
                                        </td>
                                        <td className="mt-5"style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(i.id)}>
                                        <i className="fas fa-trash largetrash"></i>
                                        </td>
                                    </tr>
                                    </>
                                )
                            })
                        }
                        <p className="text-center">Total :  ₨ {price}</p>
                    </tbody>
                </Table>
              </div>:
              <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem",padding:10,position:"relative"}}>
              <i className="fas fa-close smallclose"
              onClick={handleClose}
              style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
               <p style={{fontSize:22}}>Your carts is empty</p>
               <img src={Images} className="emptycart_img"  style={{width:"5rem",padding:10}} />
              </div>
        }
       
      </Menu>
      </Navbar>
    </>
  );
};

export default Header;
