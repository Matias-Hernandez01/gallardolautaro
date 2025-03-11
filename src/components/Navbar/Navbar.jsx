import ButtonMenu from "../ButtonMenu/ButtonMenu";
import style from "./Navbar.module.css"
import logo from "./MILOGO.png"

const Navbar = () => {
  return (
    <div className={style.divContainer}>

      <div className={style.containerTitle}>
        <h1 className={style.title}>Lauti Gallardo</h1>
      </div>


      <div className={style.buttonContainer} >
        <div className={style.button}>
        <ButtonMenu />
        </div>
      </div>


    
    </div>
      
  )
}

export default Navbar;
