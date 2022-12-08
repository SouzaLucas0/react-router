import styles from './NotFound.module.css'
import erro404 from 'assets/erro_404.png'
import React from 'react'
import BotaoPrincipal from 'components/BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navegar = useNavigate()

  return (
    <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>

            <h1 className={styles.titulo}>
                Ops! Página não encontrada...
            </h1>

            <p className={styles.paragrafo}>
                Tem certeza de que era isso que vc estava procurando?
            </p>
            <p className={styles.paragrafo}>
                Aguarde uns instantes e recarregue a página ou volte para o Início.
            </p>

            <div
                className={styles.botaoContainer}
                onClick={() => navegar(-1)}
            >
                <BotaoPrincipal tamanho='lg'>
                    Voltar
                </BotaoPrincipal>
            </div>

            <img src={erro404} alt="Cachorro de óculos e vestido como humano" className={styles.imagemCachorro} />
        </div>
        <div className={styles.espacoEmBranco}></div>
    </>
  )
}
