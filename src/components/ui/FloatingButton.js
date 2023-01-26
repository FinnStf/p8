import Button from './Button'
import SpeachBubbleIcon from '../icons/SpeachBubbleIcon'
import style from './FloatingButton.module.css'
import { useContext, useState, useEffect } from 'react'
import viewportContext from '../../store/viewportContext'


export default function FloatingButton() {
    const { width, offset } = useContext(viewportContext);
    const [fadeOutEffect, setFadeOutEffect] = useState(false)

    useEffect(() => {
     if(offset>2300){
        setFadeOutEffect(true)
     }else{
       if(fadeOutEffect){
        setFadeOutEffect(false)
       }
     }
    }, [offset])

    const btnStyles = `${style['floating-container']} ${fadeOutEffect && style.out}`
    return (
        <div className={btnStyles}>
            <Button padding='small' className='solid'>
                <SpeachBubbleIcon />
                <div>Fragen Sie uns!</div>
            </Button>
        </div>
    )
}