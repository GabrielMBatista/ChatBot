
import styled from 'styled-components'

export const BaseContainer = styled.section`
display:grid;
grid-template-rows:5% 70% 10%;
width:50vw;
height:70vh;
border: 2px solid palevioletred;
border-radius: 3px;
margin:auto;
align-items:center;
margin: 10% 0% 0% 25%;
border-radius: 20px;
outline:none;
background-color:aliceblue;;
`
export const BaseBox = styled.section`
display:grid;
width:90%;
height:85%;
grid-template-rows:80%;
grid-template-columns:10% 80% 10%;
grid-row:2;
margin:auto;
overflow-x:hidden;
border: 2px solid palevioletred;
border-radius: 3px;
background-color:whitesmoke;
`

export const BotFullAvatar = styled.img`
position:absolute;
width:15%;
margin: 18% 0% 0% 0%;
`
export const BotMsg = styled.section`
display:flex;
grid-row:1;
grid-column:2;
height: 95%;
width: 90%;
background-image:url('https://i.imgur.com/DFa4fgo.png');
background-size:90%;
background-position:right;
background-repeat:no-repeat;
align-items:center;
margin: 5% 0% 0% 10%;
`
export const MsgBotBox = styled.div`

height:60%;
width:100%;
margin: 5% 0% 0% 10%;
`
export const MsgBox = styled.section`
display:flex;
height:55%;
width:80%;
margin:auto;
`
export const RateBox = styled.section`
display:grid;
grid-template-columns: 20% 20% 20% 20% 20%;
width:40%;
margin: 0% 0% 5% 0%;
text-align:center;
`

export const UserMsg = styled.section`
display:flex;
grid-row:2;
height: 20vh;
width: 62%;
background-image:url('https://i.imgur.com/3TD4F4k.png');
background-size:100%;
background-repeat:no-repeat;
align-items:center;
align-self:center;
margin: 0 0 0px 25%;
`
export const UserChat = styled.form`
display:flex;
width:100%;
height:15vh;
align-self:center;
align-items:center;
justify-content:space-around;

`
export const InputText = styled.input`
width:auto;
height:5vh;
border-radius: 20px;
outline:none;
text-align:center;
`
export const RateButton = styled.section`
display:flex;
flex-direction:column;
margin: 0% 0% 8% 0%;
width:100%;
height:12vh;
align-items:center;
`

export const Buttons = styled.button`
border-color: #004abe;
border-radius: 4px;
box-shadow: 1px 3px 3px 2px rgba(0, 0, 0, 0.24), 0 0 10px rgba(0, 0, 0, 0.12);
cursor: pointer;
background: #004abe;
font-weight: 600;
padding: 3px ;
&:hover {
    background: whitesmoke;
    color:black;
    transition: all .4s ease-in-out;
}
color: white;
text-align: center;
font-size: 15px;
min-width: 8vw;
`
