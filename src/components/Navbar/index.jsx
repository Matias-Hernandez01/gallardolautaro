import { ButtonMenu } from '../';

import { texts } from '../../config/text';
import { MENU_MOCK } from '../../shared/mock';

import style from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={style.divContainer}>
      <div className={style.containerTitle}>
        <h1 className={style.title}>{texts.header.title}</h1>
      </div>

      <div className={style.buttonContainer}>
        <div className={style.containerButtons}>
          {MENU_MOCK.map((menu) => (
            <a href={menu.href} className={style.buttons} key={menu.href}>
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
};
