import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

export default function Menu() {
    
    
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink path = '/'>
                    Inicio
                </MenuLink>
                <MenuLink path = '/sobre'>
                    Sobre
                </MenuLink>
            </nav>
        </header>
    )
}
