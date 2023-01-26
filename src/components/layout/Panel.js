import style from './Panel.module.css'

export default function Panel(props) {
    return (
        <div className={`${style['panel-wrapper']} ${style[props.className]}`}>
            {props.children}
        </div>
    )
}