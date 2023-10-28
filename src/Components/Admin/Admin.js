import React from 'react';
import NavbarMenu from '../NavbarMenu.js';
import AdminPage from './Adminpage.js'
import Unallocate from './Unallocate.js'
import Customer from './Addcustomer'
function Admin() {
  return (
    <>
      <NavbarMenu/>
      <AdminPage/>
      <Customer/>
      <Unallocate/>
    </>
  );
}
export default Admin;