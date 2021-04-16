import React, { useContext } from 'react'
import { BaseBox, BaseContainer} from '../Styled/Styled'
import GlobalStateContext from '../GlobalStates/GlobalStateContext';
import Chat from './Chat';


function BasePage() {
  const { states } = useContext(GlobalStateContext);


  const selectMsg = () => {
    return (states.typeChange)
  };


  return (
    <BaseContainer>
      <BaseBox>
        <Chat />
      </BaseBox>
      {selectMsg()}

    </BaseContainer>
  )
}

export default BasePage


