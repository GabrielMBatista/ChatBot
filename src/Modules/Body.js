import React, { useContext } from 'react'
import { BaseBox, BaseContainer } from '../Styled/Styled'
import GlobalStateContext from '../GlobalStates/GlobalStateContext';
import Chat from './Chat';


function Body() {
  const { states } = useContext(GlobalStateContext);


  const selectMsg = () => {
    return (states.typeChange)
  };
  const changeToChat = () => {
    return (states.typeChange)
  };


  return (
    <BaseContainer>
      chatbot
      <BaseBox>
      <Chat></Chat>
      </BaseBox>
      {selectMsg()}

    </BaseContainer>
  )
}

export default Body


