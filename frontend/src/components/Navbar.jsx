
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../assets/Icons/adoption.png'
import { Link, useLocation } from "react-router-dom";
import apiClient from "../utils/apiClient";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export function Component() {

  const dispatch =  useDispatch()
  const {currentUser} = useSelector((state) => state?.user);
  const location = useLocation();

  const isActive = (path) => location.pathname === path

  const handleSignout = async() => {
       try {
          const res = await apiClient.post('/user/sign-out');
          if(!res?.statusText == "OK"){
            console.log(res?.data?.message);
          } else {
            dispatch(signoutSuccess());
          }
       } catch (error) {
            console.log(error)
       }
  }

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Stray Help</span>
      </Navbar.Brand>
      {currentUser && (<div className="flex md:order-2 gap-5 items-center">
         <Link to='/login'><p className="text-center text-white cursor-pointer">Login</p></Link>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{currentUser?.name}</span>
            <span className="block truncate text-sm font-medium">{currentUser?.email}</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>) }
      
      <Navbar.Collapse>
        <Navbar.Link href="" active={isActive('/')}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about-us" active={isActive('/about-us')}>About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
