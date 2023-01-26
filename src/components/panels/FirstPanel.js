import style from './FirstPanel.module.css'
import party_background from '../../assets/party_background.png'
import Button from "../ui/Button";
import Panel from "../layout/Panel";

export default function FirstPanel() {
    return (
        <Panel className='background-black'>
            <img className={style['background-image']} src={party_background} alt='People cellebrating background'/>
            <div className={style['content-wrapper']}>
                <h2>Begeistern - <br/>Berühren</h2>
                <h4 className='text-color-blue'>„Gibt es eine schönere Tätigkeit,<br/>
                    Als träume zu erfüllen?“</h4>
                <Button className='transparent'>Mehr erfahren</Button>
            </div>
        </Panel>
    )
}