import { gsap } from 'gsap'
import {Draggable} from 'gsap/Draggable'

const interaction = (el, container, target) => {
    gsap.registerPlugin(Draggable)
    Draggable.create(el.current, {type:"x,y", edgeResistance:0.65, bounds:container, inertia:true});
}

export default interaction