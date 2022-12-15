import PostModel from 'components/PostModel'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './About.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function About() {
  return (
    <PostModel
      fotoCapa={fotoCapa}
      titulo="Sobre Mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Lucas
      </h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Lucas com Fone"
        className={styles.fotoSobreMim}
      />


      <p className={styles.paragrafo}>
        Formado em Sistemas de Informaçã o
        e buscando consolidar primeiramente
        carreira em Desenvolvimento
        Front-End com especialidade em
        ReactJS.
      </p>

      <p className={styles.paragrafo}>
        Posteriormente pretendo
        adquirir conhecimentos em Back-End,
        a fim de trilhar a carreira de
        desenvolvedor Full Stack.
      </p>
    </PostModel>
  )
}
