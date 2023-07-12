import { useEffect } from 'react';

export default function ThemeSwitcher({ theme }: { theme: any }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/themes/${theme}.css`;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
      return void 0;
    };
  }, [theme]);
  return null;
}
