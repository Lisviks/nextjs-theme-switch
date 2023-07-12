'use client';

import styles from '@/app/header/Header.module.scss';
import { useState } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Header() {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className={styles.header}>
      <p>Theme Switcher</p>
      <button onClick={switchTheme}>Switch theme</button>
      <ThemeSwitcher theme={theme} />
    </header>
  );
}
