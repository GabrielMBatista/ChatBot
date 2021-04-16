import React from 'react'
import BotMsgs from './BotScript/BotMsgs';
import { BotFullAvatar, BotMsg, MsgBox } from '../Styled/Styled'
function Chat() {
  return (
    <BotMsg>
      <MsgBox>
        <BotMsgs />
      </MsgBox>
      <BotFullAvatar src='https://i.imgur.com/wPC98o2.png' />
    </BotMsg>

  )
}

export default Chat
