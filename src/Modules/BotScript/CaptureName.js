import React, { useContext } from 'react'
import { Formik, useFormik } from 'formik';
import GlobalStateContext from '../../GlobalStates/GlobalStateContext';
import { Buttons, InputText, UserChat } from '../../Styled/Styled'
import CaptureCidade from './CaptureCidade';

function CaptureName() {
  const { requests, setters } = useContext(GlobalStateContext);
  const formik = useFormik({
    initialValues: {
      fullName: "",
    },
    onSubmit: () => {
      requests.saveInfo(formik.values)
      requests.controlBot()
      setters.setTypeChange(<CaptureCidade />)
      formik.resetForm();
    },
  });

  return (
    <Formik>
      <UserChat onSubmit={formik.handleSubmit}>
        <InputText
          required
          id='fullName'
          name='fullName'
          type='text'
          onChange={formik.handleChange}
          placeholder='Nome e Sobrenome'
          value={formik.values.fullName}
        />
        <Buttons type="submit" onClick={() => setters.setShowName(formik.values.fullName)} >Send</Buttons>
      </UserChat>
    </Formik>
  )
}

export default CaptureName
