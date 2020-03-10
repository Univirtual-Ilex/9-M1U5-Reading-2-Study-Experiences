//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
// styles from styled
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Data
// import data from './Actividad2_data'
// Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import { IRow, ICol } from '../Grid'
// import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
import ButtonUi from '../ButtonControlUI'
// import PreguntaRadio from '../PreguntaRadio/PreguntaRadio'
// Componente base
import Data from './Actividad2_data'
import PreguntaTF from '../PreguntaTF'

import ButtonRadioSimple from '../ButtonRadioSimple'



const Actividad2_base = ({staticContext, ...props}) => {

    const [modalFlag, setModal] = useState(false)
    const [passed, setPassed] = useState(false)

    const setChecked = (id, button) => {
        const data = Data[id]
        if(button === 0 && data.button1.score === 1){
            data.right = 1
        }else if(button === 1 && data.button2.score === 1){
            data.right = 1
        }else if(button === 2 && data.button3.score === 1){
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

    const questions = Data.map((data,i) => {
        return(
            <ICol w={25} key={i} >
                <p > <strong >{i + 1}).</strong> {data.text}</p>
                <ButtonRadioSimple setCheckedState={setChecked} arrId={i} buttonId={0} nameb={'first_button1' + i} text={data.button1.text} className={"ml-1  " + 'first_button1' + i} />
                <ButtonRadioSimple setCheckedState={setChecked} arrId={i} buttonId={1} nameb={'first_button1' + i} text={data.button2.text} className={"ml-1  " + 'first_button1' + i} /> 
                <ButtonRadioSimple setCheckedState={setChecked} arrId={i} buttonId={2} nameb={'first_button1' + i} text={data.button3.text} className={"ml-1  " + 'first_button1' + i} /> 
            </ICol>
        )
    })
    return (
        <Container bgImage='./src/bg_actividad1.png' h={46} w={80} {...props}>

            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Drag the words to the appropriate box, plural, female or male.' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>
            
            <IRow w={85} align="center">
                <ICol pt={ 4 } pb={0.5}>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    CHOOSE THE CORRECT ANSWER BASED ON THE DESCRIPTIONS OF THE APPS
                    </MainTitle>  
                </ICol>
            </IRow>

            <IRow pt={2} w={85} justify={'center'} className="columns" align={'center'} >
                {questions}
            </IRow>


            <IRow pt={7.7} >
                <ICol  onClick={checkActivity} ><ButtonCheck /></ICol>
            </IRow>
            <PreguntaTF visibility={modalFlag}  answers={Data} passed={passed} repeatUrl={'/actividad2'} finished={passed} />



        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
