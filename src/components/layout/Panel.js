import style from './Panel.module.css'

export default function Panel(props) {
    const classes = props.className.split(' ').map(item=>style[item]).join(' ')
    return (
        <div className={`${style['panel-wrapper']} ${classes}`}>
            {props.children}
        </div>
    )
}