import { ButtonMenu } from '../';

import { MENU_MOCK } from '../../shared/mock';
import image from "../../assets/LAUTIGALLARDOLOGO.png";

import style from './Navbar.module.css';

export const Navbar = () => (
  <div className={style.divContainer}>

    <div className={style.containerTitle}>
      <img src={image} className={style.imageTitle} />
    </div>

    <div className={style.buttonContainer}>
      <div className={style.containerButtons}>
        {MENU_MOCK.map((menu) => (
          <a href={menu.url} className={style.buttons} key={menu.url}>
            {menu.label}
          </a>
        ))}
      </div>
    </div>

    <div className={style.button}>
      <ButtonMenu />
    </div>
  </div>
);
