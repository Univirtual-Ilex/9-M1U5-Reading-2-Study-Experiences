//Import
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import styles from './Draggable_styles'
import BocinaButton from '../BocinaButton'
import { gsap, TweenMax } from 'gsap'
import { Draggable} from 'gsap/Draggable'

// Componente base
// Es un draggable con drop target
// PROPS
/**
 * areaDrag: #id del elemento que se va a usar como contenedor importante usar el #
 * audio: String url de la locación del audio
 * text: Contenido del texto del elemento arrastrable. No usa propchildren
 * target: #id del elemento al que va a apuntar
 * elementId: es un identificador que funciona para definir la identidad de cada instancia
 * // Base
 * ref: Recibe la referencia o el conjunto de referencias html del elemento al que apuntará como droppable
 */

const Draggable_base = React.forwardRef(({visible, areaDrag, text, target, elementId, checkFunction, ...props }, ref ) => {
    const itemDraggable = useRef()
    useEffect ( () => {

        gsap.registerPlugin(Draggable)
        Draggable.create( itemDraggable.current , { 
            type: 'x,y',
            edgeResistance:0.65,
            bounds:areaDrag,
            throwProps:true,
            zIndex:500,
            // liveSnap: { points:[{x:100, y:100}], radius: 50}, // {x:100, y:100}, {x:50, y:50}, {x:100, y:100} Puntos en la posición 0x y 0y tambien en la 50x y 50y
            inertia:true,
            onDragEnd: function (e) {
                var count = 0
                target.map((item, i) => {

                    const div = document.querySelector('#' + item)
                    if(!this.hitTest(div, '70%')){
                        count ++
                    }else{
                        checkFunction(elementId, item)
                    }
                    if(count == 5){
                        TweenMax.to(this.target, 0.2, {x:0, y:0})
                        return false
                    }
                })
            }
        })
    } , [areaDrag, target, ref, elementId, checkFunction, visible])


    return (
        <div {...props} ref={itemDraggable}>
            <div className='draggable' >
            
                <span>{ text }</span>
            </div>

        </div>
        
    )
})

const DraggableItem = styled(Draggable_base)`${ styles }`

export default DraggableItem
