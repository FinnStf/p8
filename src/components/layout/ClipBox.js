import style from './ClipBox.module.css'
export default function ClipBox(props) {
    return (
        <div className={style[props.className]}>
            <div className={style['box']}>
                <span className={`${style['box-header']} text-color-blue`}>
                    {props.title}
                </span>
                {props.className === 'footer' ?
                    <h4 className={style['box-content']}>{props.children}</h4>
                    :
                    <h1 className={style['box-content']}>{props.children}</h1>}

            </div>
        </div>
    )
}