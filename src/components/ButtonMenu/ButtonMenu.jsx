import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import style from "./ButtonMenu.module.css"

const ButtonMenu = () => {

  const [ buttonState, setButtonState] = useState(false);

  const buttonOn = ()=>{
    setButtonState();
    
  }

  return (
    <div className="divConteiner">
      <div className="boxButton"  >
       <DehazeIcon className={style.icon} />
      </div>
      {/* <ClearIcon /> */}
    </div>
  )
}

export default ButtonMenu