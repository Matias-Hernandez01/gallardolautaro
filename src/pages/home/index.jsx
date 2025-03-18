import { Navbar } from '../../components';
import { Carrousel } from '../../components';

import style from './home.module.css';

export const Home = () => (
  <div className={`${style.container}`}>
    <Navbar />
      <Carrousel/>
  </div>
);
