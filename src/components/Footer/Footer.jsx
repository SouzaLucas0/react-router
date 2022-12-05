import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

export default function Footer() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada />
        <a href="https://www.linkedin.com/in/souzalucas0" target='_blank'>Desenvolvido por Lucas Souza</a> 
    </footer>
  )
}
