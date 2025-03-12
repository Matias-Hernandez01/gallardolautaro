import { ButtonMenu } from '../';

import style from './Navbar.module.css';

export const Navbar = () => {
  //TODO Esto en realidad tiene que venir por props.
  const menus = [
    {
      label: 'Redes',
      href: '/redes',
    },
    {
      label: 'Flyers',
      href: '/flyers',
    },
    {
      label: 'Fotos',
      href: '/fotos',
    },
    {
      label: 'Videos',
      href: '/videos',
    },
    {
      label: 'Sobre mí',
      href: '/sobreMi',
    },
  ];

  return (
    <div className={style.divContainer}>
      <div className={style.containerTitle}>
        <h1 className={style.title}>Lauti Gallardo</h1>
      </div>

      <div className={style.buttonContainer}>
        <div className={style.containerButtons}>
          {menus.map((menu) => (
            <a href={menu.href} className={style.buttons} key={menu.href}>
              {menu.label}
            </a>
          ))}
        </div>
      </div>

      <div className={style.button}>
        <ButtonMenu menus={menus} />
      </div>
    </div>
  );
};
