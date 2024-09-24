import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from '../../../app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/sun.svg';
import DarkIcon from 'shared/assets/icons/moon.svg';
import { Button, ThemeButton } from '../../../shared/ui/Button/Button';


interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();
  return (
      <Button
          className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])}
          onClick={toggleTheme}
          theme={ThemeButton.CLEAR}>
          {theme === Theme.DARK ? <LightIcon /> : <div className={classNames(cls['icon-wrapper'])}><DarkIcon /></div>}
      </Button>
    
  )
}