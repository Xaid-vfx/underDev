import React,{useEffect} from 'react';
import './Main_body.css';
import Card from './Card/Card'
import {allBtn} from '../NavFile/Accordin/Setting.jsx'
const Mainbody = () => {
    const value = allBtn;
    const ReportByDate = "http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03";
    const ReportByApp = "http://go-dev.greedygame.com/v3/dummy/apps";

    useEffect( ()=>{
        getReportByDate();
        getReportByApp();
    },[]);

    const getReportByDate = async () => {
        const Data_of_Date = await fetch(ReportByDate);
        const Json_Data_of_Data = await Data_of_Date.json();
        console.log(Json_Data_of_Data);
    }

    const getReportByApp = async () => { 
        const Data_of_App = await fetch(ReportByApp);
        const Json_Data_of_App = await Data_of_App.json();
        console.log(Json_Data_of_App);
        console.log(value);
    }

  return (
    <>
      <div className="MainBodyContainer">
        {
            value.map((values)=>{
                return  <Card key={values} data={values}/>
            })
        }
           
      </div>
    </>
  )
}

export default Mainbody
