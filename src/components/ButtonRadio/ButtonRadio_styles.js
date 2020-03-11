import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: block;
position: relative;

.container {
  display: block;
  position: relative;
  cursor: pointer;
  height: auto;
  margin-right: 0em;
  left: 0;
  
}
.container input {
  opacity: 0;
  cursor: pointer;
  position: absolute;
}
.checkmark {
  top: 0;
  left: 0;
  line-height: 1;
  text-align: center;
  display: inline-block;
  border-radius: 0.5em;
  width: auto;
  background-color: white;
  padding: 0.8em 1.5em;
  color: ${Ilex.violeta2};
}



/* On mouse-over, add a grey background color */
.checkmark:hover  {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: ${Ilex.color_amarilloClaro};
  color:${Ilex.morado};
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container{
  .true,.false,.n-m{
    color:#fff;
    font-weight:bolder;
  }

  .true{
    background-color: ${Ilex.verde};
  }
  .false{
    background-color: ${Ilex.color_rojo};
  }
  .n-m{
    background-color: ${Ilex.violeta2};
  }
}


`

export default styles
    