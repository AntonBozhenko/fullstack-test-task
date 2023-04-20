import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import links from './links';

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className={styles.sidebar}>
      {links.map(({
        id, url, src, text,
      }) => (
        <Link
          key={id}
          to={url}
          className={(url === pathname) ? styles.active : undefined}
        >
          <img src={src} alt={text} />
          <p>{text}</p>
        </Link>
      ))}
    </div>
  );
}
