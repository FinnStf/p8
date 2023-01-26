import style from './Header.module.css'
import { useContext } from "react";
import viewportContext from '../../store/viewportContext'
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

function Header() {
    const { width, offset } = useContext(viewportContext);
    return (
            <header className={style.header}>
                {width > 800 ?
                    <DesktopHeader offset={offset} /> : <MobileHeader offset={offset}/>}
            </header>
    )
}

export default Header