import React from 'react'
import DatePick from './Datepicker/DatePick';
import Setting from './Accordin/Setting';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="box">
            <DatePick/>
            <Setting/>
        </div> 
    </>
  )
}

export default Navbar
