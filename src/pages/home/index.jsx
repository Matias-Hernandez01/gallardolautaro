import { Navbar } from '../../components';

import style from './home.module.css';

export const Home = () => (
  <div className={`${style.container} ${style.navBar}`}>
    <Navbar />
  </div>
);
