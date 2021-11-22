/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper } from '@material-ui/core';
import loginFields from '../fields/loginFields';
import loginValues from '../fields/loginValues'
import axiosInstance from '../axois/AxoisIns';
import Form from '../fields/Form';
import storeUserDetails from '../utils/userdata';

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

const Login = ({ history }) => {
  sessionStorage.clear()
  const onLogin = async (values, actions) => {
    console.warn(actions);
    try {
      const res = await axiosInstance.post('login', values);

      storeUserDetails(res);

      // const res = await fetch('http://localhost:3000/login', {
      //   method: 'POST',
      //   body: JSON.stringify(values),
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //   },
      // });

      // const data = await res.json();
      // if (!res.ok) throw new Error(data);

      actions.resetForm();
      history.replace('/')
      window.location.reload()
    } catch (error) {
      actions.setErrors({ serverError: error });
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
          initialValues={loginValues}
          onSubmit={onLogin}
          fields={loginFields}
          btnText="Login"
        />
        <div>
          {'don\'t have an account? Please '}
          <Link to="/register">Register</Link>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
