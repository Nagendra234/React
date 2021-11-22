/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Paper } from '@material-ui/core';
import Form from '../fields/Form'
import registerFields from '../fields/registerFields';
import registerValues from '../fields/registerValues';
import axiosInstance from '../axois/AxoisIns';

const Register = ({ history }) => {
  const onRegister = async (values, actions) => {
    console.warn(actions);
    // json-server db.json -m ./node_modules/json-server-auth
    try {
    //   const res = await fetch('http://localhost:3000/login', {
    //     method: 'POST',
    //     body: JSON.stringify(values),
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //   });
    const res = await axiosInstance.post('register', values)

      console.warn(res.data)

      actions.resetForm();
      history.replace('/login');
    } catch (error) {
      console.warn(error.message);
      actions.setErrors({ serverError: error.message });
    }
  };

  return (
    <div className="login-container">
      <Paper
        elevation={3}
        style={{
          flex: 1,
          maxWidth: 500,
          padding: 20,
        }}
      >
        <Form
          initialValues={registerValues}
          onSubmit={onRegister}
          fields={registerFields}
          btnText="Register"
        />
      </Paper>
    </div>
  );
};

export default Register
