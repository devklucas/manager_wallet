import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}
:root{
    --primary-color:#FD377E;
    --primary-color2:#E34981;
    --secondary-color:#03B898;
    --Grey-4:#212529;
    --Grey-3:#868E96;
    --Grey-2:#E9ECEF;
    --Grey-1:#F8F9FA;
    --text-color:#ffffff;
}
button{
    cursor: pointer;
    outline: none;
    border:none;
}
`