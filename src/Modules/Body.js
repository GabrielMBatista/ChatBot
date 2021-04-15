import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import GlobalStateContext from '../GlobalStates/GlobalStateContext';
import { BaseBox, BaseContainer, BotFullAvatar, BotMsg, Buttons, MsgBox, UserChat, InputText } from '../Styled/Styled'


function Body() {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [showName, setShowName] = useState()
   const formik = useFormik({
    initialValues: {
    }, onSubmit: values => {
      setShowName(values.fullName)
    
      if (states.value === 'fullName') {
        setters.setValue('city')

      } else if (states.value === 'city') {
        setters.setValue('birthDate')

      } else if (states.value === 'birthDate') {
        setters.setValue('email')

      }else if (states.value === 'email') {
        setters.setValue('Finish')

      };
      formik.resetForm();
      requests.saveInfo(values);
      console.log(`info`, states.info);
    }
  }
  );
console.log(`showName`, showName)
  const showPage = () => {
    const chatnilsonMsg =['  Olá, eu sou Chatnilson, tudo bem?  Para começarmos, preciso saber seu nome.', `Que satisfação, ${showName}. Agora que já sei seu nome, me conta ai qual a cidade e estado que você mora?`, 'Legal, Agora que sabemos sua cidade e estado me diz ai quando foi que vc nasceu?', 'Agora por gentileza me informa o seu e-mail', `Voce finalizou o teste Faça uma avaliação do processo que realizou até chegar aqui. Nós agradecemos!`]

  if (states.value === 'fullName') {
    return (chatnilsonMsg[0])
    
  } else if (states.value === 'city') {
  
    return (chatnilsonMsg[1])
    
  } else if (states.value === 'birthDate') {
    return (chatnilsonMsg[2])
    
  } else if (states.value === 'email') {
    return (chatnilsonMsg[3])
  }else if (states.value === 'Finish') {
    return (chatnilsonMsg[4])
  }
  }


  return (
    <BaseContainer>
      chatbot
      <BaseBox>
        <BotMsg>
          <MsgBox>
            {showPage()}
          </MsgBox>
        </BotMsg>
        <BotFullAvatar src='https://i.imgur.com/wPC98o2.png' />
      </BaseBox>
      <UserChat onSubmit={formik.handleSubmit}>
        <InputText
          id={states.value}
          name={states.value}
          onChange={formik.handleChange}
          value={formik.values.showName}
        />
        <Buttons type="submit" >
          Send
          </Buttons>
      </UserChat>
    </BaseContainer>
  )
}

export default Body


