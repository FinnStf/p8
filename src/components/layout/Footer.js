import style from './Footer.module.css'
import LogoShort from '../icons/LogoShort'
import ClipBox from '../layout/ClipBox'
import { useEffect, useState } from 'react'
export default function Footer() {
    const [currYear, setCurrYear] = useState();
    useEffect(() => {
        setCurrYear(new Date().getFullYear())
    }, [])
    return (
        <div className={style['footer-wrapper']}>
            <div className={style['footer-content']}>
                <div id={style['clip-box']}>
                    <ClipBox className='footer' title='(F)acts P8'>
                        Diese Gedanken diskutieren wir gerne mit ihnen!
                    </ClipBox>
                </div>
                <div>
                    <p>
                        P8 Marketing GmbH<br />
                        welcome@p8.eu<br />
                        Sparkassenplatz 2, Top 50<br />
                        6020 Innsbruck<br />
                        www.p8.eu
                    </p>
                </div>
                <div>
                    <p>
                        (f)acts Veranstaltungsmanagement GmbH<br />
                        info@facts.at<br />
                        Am Kehlerplatz 2<br />
                        6850 Dornbirn<br />
                        www.facts.at
                    </p>
                </div>
            </div>
            <div className={style['footer-bottom']}>
                <LogoShort />
                <span>
                    <a>welcome@p8.eu</a>
                </span>
                <span>&copy; (f)acts p8 digital {currYear}</span>
                <span>
                    <a>Impressum</a>
                    <a>Presse</a>
                    <a>AGB</a>
                </span>
            </div>
        </div>
    )
}