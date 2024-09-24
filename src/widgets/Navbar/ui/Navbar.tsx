import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from '../../ThemeSwitcher';


interface NavbarProps {
    className?: string;
}

export function Navbar({ className}: NavbarProps) {
  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <div className={cls.links}>
              <AppLink to={'/'} theme={AppLinkTheme.INVERTED_SECONDARY} className={cls.mainLink}>Главная</AppLink>
              <AppLink to={'/about'} theme={AppLinkTheme.INVERTED_SECONDARY}>О сайте</AppLink>
          </div>
    </div>
  )
}

