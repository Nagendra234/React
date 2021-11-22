/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik } from 'formik'
import React from 'react'

const Formikp = () => (
  <div>
    <Formik
      initialValues={{
                username: '',
                password: '',
            }}
    >
      {({ values }) => (
        <form>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" name="username " value={values.username} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={values.password} />
          </div>
          <button type="button">Login</button>
        </form>
)}
    </Formik>
  </div>
    )

export default Formikp
