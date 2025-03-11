import ButtonMenu from "../ButtonMenu/ButtonMenu";
import style from "./Navbar.module.css";

const Navbar = (menus) => {

// Por el menus te va a venir algo así:
// [
//   {
//     label: 'Redes',
//     href: '/redes'
//   }
// ]
  
  return (
    <div className={style.divContainer}>
      <div className={style.containerTitle}>
        <h1 className={style.title}>Lauti Gallardo</h1>
      </div>

      <div className={style.buttonContainer}>
        <div className={style.containerButtons}>
{/*           {
            menu.map((menu) => (
              <a href={menu.href} className={style.buttons}>{menu.label}</a>
            ))
          } */}

{/*           Al implementar el mapeo esto de acá abajo no hace falta. */}
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
