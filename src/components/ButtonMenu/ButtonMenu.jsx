import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';

const ButtonMenu = () => {

  const [ buttonState, setButtonState] = useState(false);

  const buttonOn = ()=>{
    setButtonState();
    
  }

  return (
    <div className="divConteiner">
      <div className="boxButton"  >
       <DehazeIcon/>
      </div>
      <ClearIcon />
    </div>
  )
}

export default ButtonMenu