import React,{useState} from 'react'
import './Setting_design.css' 
import Btn from './buttonRender/Btn';
export const allBtn = ["Date","App","Clicks","Ad Response","Ad Requests","Impression","Revenue","Fill Rate","CTR"]

const Setting = () => {

    const [toggle,setToggle] = useState(false);

    const hangleToggle = () => {
        setToggle(!toggle);
    }
    const handleClose = () => {
        setToggle(!toggle);
    }

    const changeInArray = (change) => {
        return !change;
    }
   

  return (
    <>
    <div className="accordin_maxsize">
        <div className="settingBox">
        <div className="accordion" onClick={hangleToggle}>Settings</div>
        </div>
     {
        toggle
         &&
    <div className="panel">
    <h4>Dimensions and Matrices</h4>
        <div className="allBtnConatiner">
            {
                allBtn.map((data)=>{
                    {/* console.log(data); */}
                return <Btn key={data} strings={data} mainArr={allBtn} />
                })
            }
 
        </div>
            
        <div className="btnBox">
            <div className="closeBtn" onClick={handleClose}>Close</div>
            <div className="applyChangeBtn">Apply Changes</div>
        </div>    
     </div> 
     }
     </div>
   
    </>
  )
}

export default Setting;
