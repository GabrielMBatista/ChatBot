import React, { useContext, useEffect, useRef } from 'react'
import { BotFullAvatar, BotMsg, LeftMsgBallon, MsgBox, PersonAvatar, RightMsgBallon, UserMsg, UserBox, RightMsgBallon1, PersonAvatar1, UserBox1, LeftMsgBallon1, BotFullAvatar1, MsgBox1, TextBoxes, BotFullAvatar2, LeftMsgBallon2, MsgBox2, UserBox2, RightMsgBallon2, PersonAvatar2, BotFullAvatar3,LeftMsgBallon3,MsgBox3} from '../Styled/Styled'
import GlobalStateContext from '../GlobalStates/GlobalStateContext';
function Chat() {

  const { states } = useContext(GlobalStateContext);
  const chatnilsonMsg = ['Olá, eu sou Chatnilson, tudo bem?  Para começarmos, preciso saber seu nome.', `Que satisfação, ${states.showName}. Agora que já sei seu nome, me conta ai qual a cidade e estado que você mora?`, 'Legal, Agora que sabemos sua cidade e estado me diz ai quando foi que vc nasceu?', 'Agora por gentileza me informa o seu e-mail', `Voce finalizou o teste Faça uma avaliação do processo que realizou até chegar aqui. Nós agradecemos!`]

  const messageRef = useRef();
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  })


  const ShowMsgs = () => {
    if (states.value === 'fullName') {
      return (
        <BotMsg>
          <MsgBox>
            <TextBoxes>{chatnilsonMsg[0]}</TextBoxes>
          </MsgBox>
          <LeftMsgBallon src='https://i.imgur.com/DFa4fgo.png' />
          <BotFullAvatar src='https://i.imgur.com/wPC98o2.png' />
        </BotMsg>
      )
    } else
      if (states.value === 'city') {
        return (
          <BotMsg>
            <MsgBox>
              <TextBoxes>{chatnilsonMsg[0]}</TextBoxes>
            </MsgBox>
            <LeftMsgBallon src='https://i.imgur.com/DFa4fgo.png' />
            <BotFullAvatar src='https://i.imgur.com/wPC98o2.png' />
            <UserBox>
              <UserMsg>{states.showName}</UserMsg>
            </UserBox>
            <RightMsgBallon src='https://i.imgur.com/3TD4F4k.png' />
            <PersonAvatar src='https://i.imgur.com/L6pnlrX.png' />
            <MsgBox1>
              <TextBoxes>{chatnilsonMsg[1]}</TextBoxes>
            </MsgBox1 >
            <LeftMsgBallon1 src='https://i.imgur.com/DFa4fgo.png' />
            <BotFullAvatar1 src='https://i.imgur.com/wPC98o2.png' />
            <div ref={messageRef}></div>
          </BotMsg>
        )

      } else if (states.value === 'birthDate') {
        return (
          <BotMsg>
            <MsgBox>
              <TextBoxes>{chatnilsonMsg[0]}</TextBoxes>
            </MsgBox>
            <LeftMsgBallon src='https://i.imgur.com/DFa4fgo.png' />
            <BotFullAvatar src='https://i.imgur.com/wPC98o2.png' />

            <UserBox>
              <UserMsg>{states.showName}</UserMsg>
            </UserBox>
            <RightMsgBallon src='https://i.imgur.com/3TD4F4k.png' />
            <PersonAvatar src='https://i.imgur.com/L6pnlrX.png' />

            <MsgBox1 >
              <TextBoxes>{chatnilsonMsg[1]}</TextBoxes>
            </MsgBox1>
            <LeftMsgBallon1 src='https://i.imgur.com/DFa4fgo.png' />
            <BotFullAvatar1 src='https://i.imgur.com/wPC98o2.png' />

            <UserBox1>
              <UserMsg>{states.info[1].city}</UserMsg>
            </UserBox1>
            <RightMsgBallon1 src='https://i.imgur.com/3TD4F4k.png' />
            <PersonAvatar1 src='https://i.imgur.com/L6pnlrX.png' />

            <MsgBox2 >
              <TextBoxes>{chatnilsonMsg[2]}</TextBoxes>
            </MsgBox2>
            <LeftMsgBallon2 src='https://i.imgur.com/DFa4fgo.png' />
            <BotFullAvatar2 src='https://i.imgur.com/wPC98o2.png' />
            <div ref={messageRef}></div>
          </BotMsg>
        )

      } else if (states.value === 'email') {
        return (
          <BotMsg>
            <MsgBox>
              <TextBoxes>{chatnilsonMsg[0]}</TextBoxes>
            </MsgBox>
            <LeftMsgBallon src='https://i.imgur.com/DFa4fgo.png' />
            <BotFullAvatar src='https://i.imgur.com/wPC98o2.png' />

            <UserBox>
              <UserMsg>{states.showName}</UserMsg>
            </UserBox>
            <RightMsgBallon src='https://i.imgur.com/3TD4F4k.png' />
            <PersonAvatar src='https://i.imgur.com/L6pnlrX.png' />

            <MsgBox1>
              <TextBoxes>{chatnilsonMsg[1]}</TextBoxes>
            </MsgBox1>
            <LeftMsgBallon1 src='https://i.imgur.com/DFa4fgo.png' />
            <BotFullAvatar1 src='https://i.imgur.com/wPC98o2.png' />

            <UserBox1>
              <UserMsg>{states.info[1].city}</UserMsg>
            </UserBox1>
            <RightMsgBallon1 src='https://i.imgur.com/3TD4F4k.png' />
            <PersonAvatar1 src='https://i.imgur.com/L6pnlrX.png' />

            <MsgBox2>
              <TextBoxes>{chatnilsonMsg[2]}</TextBoxes>
            </MsgBox2>
            <LeftMsgBallon2 src='https://i.imgur.com/DFa4fgo.png' />
            <BotFullAvatar2 src='https://i.imgur.com/wPC98o2.png' />

            <UserBox2 >
              <UserMsg>{states.info[2].birthDate}</UserMsg>
            </UserBox2>
            <RightMsgBallon2 src='https://i.imgur.com/3TD4F4k.png' />
            <PersonAvatar2 src='https://i.imgur.com/L6pnlrX.png' />

            <MsgBox3>
              <TextBoxes>{chatnilsonMsg[3]}</TextBoxes>
            </MsgBox3>
            <LeftMsgBallon3 src='https://i.imgur.com/DFa4fgo.png' />
            <BotFullAvatar3 src='https://i.imgur.com/wPC98o2.png' />


            <div ref={messageRef}></div>
          </BotMsg>
        )

      } else if (states.value === 'Finish') {
        return (
          <BotMsg>
            <MsgBox>
              <TextBoxes>{chatnilsonMsg[4]}</TextBoxes>
            </MsgBox>
            <LeftMsgBallon src='https://i.imgur.com/DFa4fgo.png' />
            <BotFullAvatar src='https://i.imgur.com/wPC98o2.png' />
          </BotMsg>
        )
      }

  };


  return (
    <div>
      {ShowMsgs()}
    </div>

  )
}

export default Chat
