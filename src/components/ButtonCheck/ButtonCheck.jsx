
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonCheck_styles'
import {Link} from 'react-router-dom'

// Componente base
const ButtonCheck_base = ({link, ...props}) => {
    return (
        <div {...props}>
            <button className='btn-clean'>
            	{link ? <Link to={link}> {props.children ? props.children : 'Check'} </Link> : props.children ? props.children : 'Check'}
            </button>
        </div>
    )
}
const ButtonCheck = styled(ButtonCheck_base)`${ styles }`
export default ButtonCheck
