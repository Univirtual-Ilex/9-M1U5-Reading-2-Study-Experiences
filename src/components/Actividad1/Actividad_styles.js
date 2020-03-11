import styled, {css} from 'styled-components'
// eslint-disable-next-line
import Ilex from '../../App/variables'
// eslint-disable-next-line
import animations from './Actividad_animations'

const mistyles = css`
.hide{
    display: none;
}


.person{
        width:200px;
        height:215px;
        cursor: pointer;
        position:relative;
        .person-container{
            width:100%;
            height:100%;
            background-image: url(./src/sprite200x215.png);
            background-repeat: no-repeat;
            background-position: 0 0;
            &:hover{
                background-position-y:-215px ;
            }
            &.text1{

            }
            &.text2{
                background-position-x:-200px;

            }
        }
    }
.position-relative{
    position:relative;
}
.inline_list{
    font-size:0.8em;
    color:${Ilex.color_grisMedio}
}
`

export const DraggablesContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 0.4em 1em;
    text-align:center;
`

export const AreasContainer = styled(DraggablesContainer)`

    display:flex;
    justify-content:center;
    align-items: center ;
`

export const ProgressbarContainer = styled.div`
    width: 60%;
    margin:auto;
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    position:absolute;
    right:${props => props.right || '1.6' }em;
    top:${props => props.top || '1' }em;
    z-index: 2000;

`

export default {mistyles , DraggablesContainer, AreasContainer, ProgressbarContainer}