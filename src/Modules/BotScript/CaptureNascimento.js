import React, { useContext } from 'react'
import { Formik, useFormik } from 'formik';
import GlobalStateContext from '../../GlobalStates/GlobalStateContext';
import { Buttons, InputText, UserChat } from '../../Styled/Styled'
import CaptureEmail from './CaptureEmail';

function CaptureNascimento() {
  const { requests, setters } = useContext(GlobalStateContext);
  const formik = useFormik({
    initialValues: {
      birthDate: "",
    },
    onSubmit: () => {
      requests.saveInfo(formik.values)
      requests.controlBot()
      setters.setTypeChange(<CaptureEmail />)
      formik.resetForm();
    },
  });

  return (
    <Formik>
      <UserChat onSubmit={formik.handleSubmit}>
        <InputText
          required
          id='birthDate'
          name='birthDate'
          type='date'
          onChange={formik.handleChange}
          placeholder='Ex:25/06/1991'
          value={formik.values.birthDate}
        />
        <Buttons type="submit">Send</Buttons>
      </UserChat>
    </Formik>
  )
}

export default CaptureNascimento


