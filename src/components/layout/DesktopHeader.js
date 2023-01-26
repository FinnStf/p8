import style from "./DesktopHeader.module.css";
import LogoLong from '../icons/LogoLong';
import LogoShort from '../icons/LogoShort';
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import MapIcon from "../icons/MapIcon";

export default function DesktopHeader(props) {
    return (
        <nav className={style['navigation-wrapper']}>

            <div className={style['navigation-menu']}>
                <div className={style['logo-wrapper']}>
                    <a href='/'>
                        {props.offset < 20 ?
                            <LogoLong /> : <LogoShort />
                        }
                    </a>
                </div>
                <div className={style.navigation}>
                    <a className={style['hover-underline-effect']} href='/'>
                        <span>Leistungen</span>
                    </a>
                    <a className={style['hover-underline-effect']} href='/'>
                        <span>Projekte</span>
                    </a>
                    <a className={style['hover-underline-effect']} href='/'>
                        <span>Über Uns</span>
                    </a>
                    <a className={style['hover-underline-effect']} href='/'>
                        <span>Kontakt</span>
                    </a>
                </div>
            </div>
            <div className={`${style.navigation} ${style.actions}`}>
                <a className={style['hover-underline-effect']} href='/'>
                    <PhoneIcon />
                    <span>+43 512 565 616</span>
                </a>
                <a className={style['hover-underline-effect']} href='/'>
                    <MailIcon />
                    <span>welcome@p8.eu</span>
                </a>
                <a className={style['hover-underline-effect']} href='/'>
                    <MapIcon />
                </a>
            </div>

        </nav>
    )
}