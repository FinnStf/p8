import { useState } from 'react';
import style from './MobileHeader.module.css'
import LogoLong from "../icons/LogoLong";
import LogoShort from '../icons/LogoShort';

export default function MobileHeader(props) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <div className={style['navigation-wrapper']}>
            <div className={style['navigation-header']}>
                <a className={style['link']} href='/'>
                    {props.offset < 20 ?
                        <LogoLong /> : <LogoShort />
                    }
                </a>
                <span className={style['navigation-links']}>
                    <button
                        aria-label='Toggle Mobile Menu Button'
                        className={`${style['mobile-menu']} ${mobileNavOpen ? style.open : ''}`}
                        onClick={() => {
                            setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
                        }}
                    >
                        <div className={style['bar-one']} />
                        <div className={style['bar-two']} />
                        <div className={style['bar-three']} />
                    </button>
                </span>
            </div>
            <nav className={`${style['mobile-nav-wrapper']} ${mobileNavOpen ? style.open : ''}`}>
                <a className={style['mobile-link']} href="/">
                    Leistung
                </a>
                <a className={style['mobile-link']} href="/">
                    Projekte
                </a>
                <a className={style['mobile-link']} href="/">
                    Über Uns
                </a>
                <a className={style['mobile-link']} href="/">
                    Kontakt
                </a>
            </nav>
        </div>
    )
}