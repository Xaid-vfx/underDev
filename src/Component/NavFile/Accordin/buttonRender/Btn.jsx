import React,{useState} from 'react';
import './Btn.css'

const Btn = (props) => {
  const [isActive,changeActiveness] = useState(true);
  var mainArrCopy =[...props.mainArr];
  
  const updateArray = () => {
    console.log(mainArrCopy);
    if(mainArrCopy.includes(props.strings))
    {
      const itemToRemove = props.strings;
      const index = mainArrCopy.indexOf(itemToRemove);
      changeActiveness(false);
      if(index>-1)
      {
        mainArrCopy.splice(index,1);
        console.log(mainArrCopy);
      }
    }
    // else{
    //   mainArrCopy.push(props.strings);
    //   changeActiveness(true);
    // }

  }

  return (
    <>
     <div className={isActive?'active renderedBtn':'renderedBtn'} onClick={updateArray}>
        {props.strings}
     </div> 

        
    </>
  )
}

export default Btn
