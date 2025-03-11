import ButtonMenu from "../ButtonMenu/ButtonMenu";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.divContainer}>
      <div className={style.containerTitle}>
        <h1 className={style.title}>Lauti Gallardo</h1>
      </div>

      <div className={style.buttonContainer}>
        <div className={style.containerButtons}>
          <a className={style.buttons}>Redes</a>
          <a className={style.buttons}>Flyers</a>
          <a className={style.buttons}>Fotos</a>
          <a className={style.buttons}>Videos</a>
          <a className={style.buttons}>Sobre mí</a>
        </div>
      </div> 

      <div className={style.button}>
        <ButtonMenu />
      </div>
    </div>
  );
};

export default Navbar;
