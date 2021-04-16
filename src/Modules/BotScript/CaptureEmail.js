import React, { useContext } from 'react'
import { Formik, useFormik } from 'formik';
import GlobalStateContext from '../../GlobalStates/GlobalStateContext';
import { Buttons, InputText, UserChat } from '../../Styled/Styled'
import FinishRate from './FinishRate';

function CaptureEmail() {
  const { requests, setters } = useContext(GlobalStateContext);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: () => {
      requests.saveInfo(formik.values)
      requests.controlBot()
      setters.setTypeChange(<FinishRate />)
      formik.resetForm();
    },
  });

  return (
    <Formik>
      <UserChat onSubmit={formik.handleSubmit}>
        <InputText
          required
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          placeholder='Digite Seu e-mail para contato'
          value={formik.values.email}
        />
        <Buttons type="submit">Send</Buttons>
      </UserChat>
    </Formik>
  )
}

export default CaptureEmail


