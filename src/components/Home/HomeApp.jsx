import React from 'react'
import { CardApp } from '../Cards/CardApp'
import { FooterApp } from '../Footer/FooterApp'
import { InfoApp } from '../Information/InfoApp'
import { NavbarApp } from '../Navbar/NavbarApp'
import { SliderApp } from '../Slider/SliderApp'

export const HomeApp = () => {
  return (
    <>
        <NavbarApp />
        <SliderApp />
        <InfoApp />
        <CardApp />
        <FooterApp />
    </>
  )
}
