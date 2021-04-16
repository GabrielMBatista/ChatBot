
import styled from 'styled-components'

export const BaseContainer = styled.section`
display:grid;
grid-template-rows:1% 70% 1%;
margin:auto;
row-gap:5%;
align-items:center;
margin-top: 1%;
outline:none;
border: 2px solid currentColor;
border-radius: 13px;
background-color:aliceblue;
@media (min-width:1400px) {
    width:30vw;
    height:89vh;
  };
  @media (max-width:1280px) {
    width:30vw;
    height:80vh;
  };
  @media (max-width:1024px) {
    width:60vw;
    height:80vh;
  };
  @media (max-width:500px) {
    width:90vw;
    height:70vh;
  };
  @media (max-width:320px) {
    width:99vw;
    height:80vh;
  };
  @media (max-width:280px) {
    width:99vw;
    height:70vh;
  };
`
export const BaseBox = styled.section`
display:grid;
width:90%;
height:85%;
grid-row:2;
margin:auto;
overflow-x:hidden;
border: 2px solid palevioletred;
border-radius: 3px;
background-color:whitesmoke;
`
export const LeftMsgBallon = styled.img`
grid-row:1;
grid-column:1;
width:75%;
margin: 10% 0% 0% 12%;
z-index:1;
`
export const BotFullAvatar = styled.img`
grid-row:6;
grid-column:1;
width:40%;
margin: 5% 0% 0% 2%;
`
export const LeftMsgBallon1 = styled.img`
grid-row:5;
grid-column:1;
width:75%;
margin: 10% 0% 0% 12%;
z-index:1;
`
export const BotFullAvatar1 = styled.img`
grid-row:2;
grid-column:1;
width:40%;
margin: 5% 0% 0% 2%;
`
export const LeftMsgBallon2 = styled.img`
grid-row:9;
grid-column:1;
width:75%;
margin: 10% 0% 0% 12%;
z-index:1;
`
export const BotFullAvatar2 = styled.img`
grid-row:10;
grid-column:1;
width:40%;
margin: 5% 0% 0% 2%;
`
export const LeftMsgBallon3 = styled.img`
grid-row:13;
grid-column:1;
width:75%;
margin: 10% 0% 0% 12%;
z-index:1;
`
export const BotFullAvatar3 = styled.img`
grid-row:14;
grid-column:1;
width:40%;
margin: 5% 0% 0% 2%;
`

export const PersonAvatar = styled.img`
grid-row:4;
grid-column:1;
width:40%;
margin: 0% 0% 0% 60%;
`
export const RightMsgBallon = styled.img`
grid-row:3;
grid-column:1;
width:75%;
margin: 0% 0% 0% 10%;
z-index:1;
`
export const PersonAvatar1 = styled.img`
grid-row:8;
grid-column:1;
width:40%;
margin: 0% 0% 0% 60%;
`
export const RightMsgBallon1 = styled.img`
grid-row:7;
grid-column:1;
width:75%;
margin: 0% 0% 0% 10%;
z-index:1;
`
export const PersonAvatar2 = styled.img`
grid-row:12;
grid-column:1;
width:40%;
margin: 0% 0% 0% 60%;
`
export const RightMsgBallon2 = styled.img`
grid-row:11;
grid-column:1;
width:75%;
margin: 0% 0% 0% 10%;
z-index:1;
`
export const TextBoxes = styled.p`
text-align:center;
font-weight:500;
margin:auto;
width:60%;
font-size:1.4vw;
line-height:95%;
font-size:1em;
z-index:2;
@media (min-width:1024px) {
  font-size:1.2em;
  };
  @media (max-width:280px) {
    font-size:0.8em;
  };
`;


export const BotMsg = styled.div`
display:grid;
grid-template-rows:repeat( 2,fr);
height: 80%;
width: 90%;
align-items:center;
margin: auto;
z-index:100;
`

export const MsgBox = styled.section`
display:flex;
grid-row:1;
grid-column:1;
height:100%;
width:100%;
`
export const MsgBox1 = styled.section`
display:flex;
grid-row:5;
grid-column:1;
height:100%;
width:100%;
`
export const MsgBox2 = styled.section`
display:flex;
grid-row:9;
grid-column:1;
height:100%;
width:100%;
`
export const MsgBox3 = styled.section`
display:flex;
grid-row:13;
grid-column:1;
height:100%;
width:100%;
`

export const MsgBotBox = styled.section`
display:grid;
height: 50%;
width: 60%;
margin: auto;
`
export const RateBox = styled.section`
display:grid;
grid-template-columns: 20% 20% 20% 20% 20%;
width:40%;
margin: 0% 0% 5% 0%;
text-align:center;
`

export const UserMsg = styled.section`
display:grid;
height: 20%;
width: 60%;
margin: auto;
z-index:100;
`
export const UserBox = styled.section`
display:flex;
grid-row:3;
grid-column:1;
height:100%;
width:100%;
`
export const UserBox1 = styled.section`
display:flex;
grid-row:7;
grid-column:1;
height:100%;
width:100%;
`
export const UserBox2 = styled.section`
display:flex;
grid-row:11;
grid-column:1;
height:100%;
width:100%;
`

export const UserChat = styled.form`
display:flex;
grid-row:3;
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
grid-row:3;
flex-direction:column;
margin: auto;
width:100%;
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
