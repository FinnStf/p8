import style from './FourthPanel.module.css'
import Panel from "../layout/Panel";
import Button from '../ui/Button'
import CardIcon from '../ui/CardIcon'
import DiscourseIcon from '../icons/DiscourseIcon'
import DesignIcon from '../icons/DesignIcon'
import AppDevIcon from '../icons/AppDevIcon'
import MarketingIcon from '../icons/MarketingIcon'
import SolutionsIcon from '../icons/SolutionsIcon'
import PublicRelationsIcon from '../icons/PublicRelationsIcon'

export default function FourthPanel() {
    return (
        <Panel className='background-white centered'>
            <div className={style['content-wrapper']}>
                <h5 className='text-color-blue'>Leistungen</h5>
                <h4>Die volle Bandbreite</h4>
                <div className={style['grid-container']}>
                    <CardIcon id='box-one'>
                        <DiscourseIcon/>
                        <span>Krisen-Kommunikation</span>
                    </CardIcon>
                    <CardIcon id='box-two'>
                    <DesignIcon/>
                      <span>Grafikdesign</span>
                    </CardIcon>
                    <CardIcon id='box-three'>
                        <AppDevIcon/>
                        <span>Web &amp; App Development</span>
                    </CardIcon>
                    <CardIcon id='box-four'>
                        <MarketingIcon/>
                        <span>Online Marketing</span>
                    </CardIcon>
                    <CardIcon id='box-five'>
                        <SolutionsIcon/>
                        <span>3D Solutions</span>
                    </CardIcon>
                    <CardIcon id='box-six'>
                        <PublicRelationsIcon/>
                        <span>Public Relations</span>
                    </CardIcon>
                </div>
                <span className={style['button-wrapper']}>
                <Button className='solid'>Zu allen unseren Leistungen</Button>
                </span>
            </div>

        </Panel>

)
}