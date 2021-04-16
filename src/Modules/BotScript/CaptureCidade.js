import React, { useContext } from 'react'
import { Formik, useFormik } from 'formik';
import GlobalStateContext from '../../GlobalStates/GlobalStateContext';
import { Buttons, InputText, UserChat } from '../../Styled/Styled'
import CaptureNascimento from './CaptureNascimento';

function CaptureCidade() {
  const {requests,setters} = useContext(GlobalStateContext);
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: () => {
      requests.saveInfo(formik.values)
        requests.controlBot()
        setters.setTypeChange(<CaptureNascimento/>)
      formik.resetForm();
    },
  });

  return (
      <Formik>
        <UserChat onSubmit={formik.handleSubmit}>
          <InputText
            required
            id='city'
            name='city'
            type='text'
            onChange={formik.handleChange}
            placeholder='Cidade e Estado'
            value={formik.values.city}
          />
          <Buttons type="submit">Send</Buttons>
        </UserChat>
      </Formik>
   )
}

export default CaptureCidade


