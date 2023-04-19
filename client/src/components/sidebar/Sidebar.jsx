import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import links from './links';

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className={styles.sidebar}>
      {links.map(({ id, url, text }) => (
        <Link
          key={id}
          to={url}
          className={(url === pathname) ? styles.active : undefined}
        >
          {text}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
