import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
:root{
    --background-color:#000000;
    --text-color:#ffff;
    --primary-color:#FD377E;
    --secondary-color:#E9ECEF ;
}
button{
    cursor: pointer;
    outline: none;
    border:none;
}
`