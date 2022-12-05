import React, { Children } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css';

export default function MenuLink({children, path}) {
    const location = useLocation();
  return (
    <Link to={path}
        className={`
            ${styles.link}
            ${location.pathname === path
                ? styles.linkDestacado
                : ''}`}
    >
        {children}
    </Link>
  )
}
