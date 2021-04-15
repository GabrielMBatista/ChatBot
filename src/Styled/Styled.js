
import styled from 'styled-components'

export const BaseContainer = styled.section`
display:grid;
grid-template-rows:5% 80% 10%;
width:50vw;
height:70vh;
border: 2px solid palevioletred;
border-radius: 3px;
margin:auto;;
`
export const BaseBox = styled.section`
display:grid;
width:100%;
height:100%;
padding-left:1%;
grid-template-rows:80% 20%;
grid-template-columns:10% 80% 10%;
grid-row:2;
overflow-x:hidden;
`

export const BotFullAvatar = styled.img`
grid-row:1;
grid-column:2;
width:40%;
margin: 70% 0% 0% 10%;
`
export const BotMsg = styled.section`
display:flex;
grid-row:1;
grid-column:2;
height: 73%;
width: 90%;
background-image:url('https://i.imgur.com/DFa4fgo.png');
background-size:100%;
background-repeat:no-repeat;
align-items:center;
margin: 5% 0% 0% 17%;
`
export const MsgBox = styled.section`
display:flex;
height:55%;
width:70%;
margin:auto;
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
height:10vh;
align-items:center;
justify-content:space-around;
`
export const InputText = styled.textarea`
width:40vw;
height:10vh;
grid-column:1;
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
