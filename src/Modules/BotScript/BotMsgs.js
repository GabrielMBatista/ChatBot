import React, { useContext } from 'react'
import GlobalStateContext from '../../GlobalStates/GlobalStateContext';
import { MsgBotBox, TextBoxes } from '../../Styled/Styled';

function BotMsgs() {
  const { states } = useContext(GlobalStateContext);

  const showPage = () => {
    const chatnilsonMsg = ['Olá, eu sou Chatnilson, tudo bem?  Para começarmos, preciso saber seu nome.', `Que satisfação, ${states.showName}. Agora que já sei seu nome, me conta ai qual a cidade e estado que você mora?`, 'Legal, Agora que sabemos sua cidade e estado me diz ai quando foi que vc nasceu?', 'Agora por gentileza me informa o seu e-mail', `Voce finalizou o teste Faça uma avaliação do processo que realizou até chegar aqui. Nós agradecemos!`]

    if (states.value === 'fullName') {
      return (chatnilsonMsg[0])

    } else if (states.value === 'city') {

      return (chatnilsonMsg[1])

    } else if (states.value === 'birthDate') {
      return (chatnilsonMsg[2])

    } else if (states.value === 'email') {
      return (chatnilsonMsg[3])
    } else if (states.value === 'Finish') {
      return (chatnilsonMsg[4])
    }
  }

  return (
    <div>
      <TextBoxes>
        {showPage()}
      </TextBoxes>
    </div>
  )
}

export default BotMsgs
