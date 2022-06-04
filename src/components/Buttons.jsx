import React from 'react'
import styled from 'styled-components'
const Button = styled.a`

.w-button {
    display: inline-block;
    padding: 9px 15px;
    background-color: #3898EC;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
}
.button {
    min-height: 60px;
    padding: 20px 35px;
    border-radius: 6px;
    background-color: #35b8be;
    background-image: url("https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3345876b5c4_Button%20Wave.svg");
    background-position: 0px 0px;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transition: background-color 250ms ease;
    transition: background-color 250ms ease;
    font-size: 18px;
    text-align: center;
}
a:hover{
  background-color: #31a7ad;
  transition: background-color 250ms ease;
}
.button.button-space {
    margin-top: 40px;
}
@media screen and (max-width: 479px)
.button {
    width: 100%;
    max-width: 250px;
}
`

function Buttonss({children,id}) {
  return (
    <Button>
    <a href={id} className='button button-space w-button'>{children}</a>
    </Button>
  )
}

export default Buttonss