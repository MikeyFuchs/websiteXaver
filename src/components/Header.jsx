import React from 'react'
import Logo from '../resources/exsolocutedbgremoved.png'
import { MenuIcon } from '@mui/icons-material/Menu'

const Header = () => {
  const toggleMenu = () => {
    const mobileMenu = document.querySelector('.mobileMenu')
    mobileMenu.classList.toggle('active')
  }

  return (
    <>
      <div className={'Header'}>
        <img src={Logo} alt='Logo' className={'logo'} />
        <div className={'links'}>
          <a href={'#dienstleistungen'}>Dienstleistungen</a>
          <a href={'#projekte'}>Projekte</a>
          <a href={'#about'}>Über uns</a>
          <a href={'#contact'}>Kontakt</a>
        </div>
        <div onClick={toggleMenu} className={'menuIcon'}>
          <MenuIcon />
        </div>
      </div>
      <div className={'mobileMenu'}>
        <a onClick={toggleMenu} href={'#dienstleistungen'}>
          Dienstleistungen
        </a>
        <a onClick={toggleMenu} href={'#projekte'}>
          Projekte
        </a>
        <a onClick={toggleMenu} href={'#about'}>
          Über uns
        </a>
        <a onClick={toggleMenu} href={'#contact'}>
          Kontakt
        </a>
      </div>
    </>
  )
}

export default Header
