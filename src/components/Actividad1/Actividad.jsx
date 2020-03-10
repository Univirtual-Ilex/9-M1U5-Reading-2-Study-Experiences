import React, {useRef, useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import Area from '../AreaDrop'
import ButtonUi from '../ButtonControlUI'
import Modal from '../Generales/Modal'
import ButtonCheck from '../ButtonCheck'
import {ICol, IRow} from '../Grid'
import ButtonRadio from '../ButtonRadio'
// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
// import interaction from './Actividad_interactions'
import Tooltip from '../Tooltip'

import Data from './Actividad_data'
import PreguntaTF from '../PreguntaTF'


const Actividad_base = ({staticContext, ...props}) => {
    
    const [modalFlag, setModal] = useState(false)
    const [passed, setPassed] = useState(false)

    const setChecked = (id, button) => {
        const data = Data[id]

        if(button === 0 && data.answer === 'true'){
            data.right = 1
        }else if(button === 1 && data.answer === 'false'){
            data.right = 1
        }else if(button === 2 && data.answer === 'na'){
            data.right = 1
        }else{
            data.right = 0
        }
    }

    const checkActivity = () => {
        var count = 0;
        var right = 0;
        Data.map((data) => {
            if(data.right === 1){
                count ++
                right ++
            }else{
                setPassed(false)
                count ++
            }

            if(right === Data.length){
                setPassed(true)
                setModal(true)
            }else if(count === Data.length){
                setModal(true)
            }
        })
    }

    const list = Data.map((data, i) => {
        return (
            <IRow justify={'flex-start'} className="inline_list" pt={2} key={i}>
                <div> <p> <strong> {i + 1}). </strong> {data.text} </p></div>
                <ButtonRadio setCheckedState={setChecked} arrId={i} buttonId={0} nameb={'radio_button' + i} text={'TRUE'} />
                <ButtonRadio setCheckedState={setChecked} arrId={i} buttonId={1} nameb={'radio_button' + i} text={'FALSE'} />
                <ButtonRadio setCheckedState={setChecked} arrId={i} buttonId={2} nameb={'radio_button' + i} text={'N/M'} />
            </IRow>
            )
    })
 
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={40}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='click on the buttons to listen and read the activities, associate them with the texts below.' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>
            
          
            <IRow pt={2}>
                <MainTitle color={Ilex.violeta2}>
                    READ TWO TEXTS ABOUT A WOMAN’S STUDY EXPERIENCES, THEN ANSWER IF THE SENTENCES ARE TRUE FALSE OR NOT MENTIONED
                </MainTitle>
            </IRow>
            <IRow pt={1} >
                <ICol w={45} >
                    <img src='./src/apps.png' />
                </ICol>

                <ICol w={45} >
                    {list}
                </ICol>
            </IRow>
            <IRow pt={7.3} >
                <ICol pt={1} onClick={checkActivity} ><ButtonCheck /></ICol>
            </IRow>
            <PreguntaTF visibility={modalFlag}  answers={Data} passed={passed} repeatUrl={'/actividad1'} finished={passed} />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad