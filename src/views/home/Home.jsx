import React from 'react'
import { Navbar } from '../../components'
import style from "./home.module.css"

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.navBar}>
        <Navbar/>
{}      </div>
    </div>
  )
}

export default Home