import style from './ThirdPanel.module.css'
import Panel from "../layout/Panel";
import Button from "../ui/Button";


export default function ThirdPanel() {
    return (
        <Panel className='background-grey centered'>
            <div className={style['content-wrapper']}>
                <h2>Headline Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <span className={style['button-wrapper']}>
                    <Button className='solid'>Lorem Ipsum</Button>
                </span>
            </div>
        </Panel>

)
}