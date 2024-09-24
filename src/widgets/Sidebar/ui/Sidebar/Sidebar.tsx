import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
import { LangSwitcher } from '../../../LangSwitcher';
import { Button } from '../../../../shared/ui/Button/Button';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classNames(cls.lang)} />
            </div>
        </div>
    );
}
