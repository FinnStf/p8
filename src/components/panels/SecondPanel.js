import style from './SecondPanel.module.css'
import Panel from "../layout/Panel";
import ClipBox from '../layout/ClipBox';

export default function SecondPanel() {
    return (
        <Panel className='background-white centered'>
            <div className={style['content-wrapper']}>

                <ClipBox className='background-box' title='(F)acts &amp;'>
                    Gemeinsam für ihre digitale Individual-Lösung
                </ClipBox>

                <div className={style['text-wrapper']}>
                    <p>Bei uns gibt es keine Produkte von der Stange.
                        Wir betrachten Ihre Markenwerte individuell aus
                        mehreren Perspektiven und nutzen dabei unser
                        branchenübergreifendes Know-how, um Ihre Stories,
                        Konzepte und Strategien zu etwas Besonderem werden zu lassen.
                    </p>
                </div>
            </div>
        </Panel>

    )
}