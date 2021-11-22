import Input from './Input'

const registerFields = [
    {
        name: 'firstname',
        label: 'First Name',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'First Name is Required'
            }
            return ''
        },

    },
    {
        name: 'lastname',
        label: 'Last Name',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Last Name is Required'
            }
            return ''
        },

    },
    {
        name: 'email',
        label: 'Email or Userename',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Username is Required'
            }
            return ''
        },

    },
    {
        name: 'mobilenumber',
        label: 'Mobile Number',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Mobile Number is Required'
            }
            return ''
        },

    },
    {
        name: 'password',
        label: 'Password',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Password is Required'
            }
            return ''
        },

    },
    {
        name: 'confirmpassword',
        label: 'Confirm Password',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'First Name is Required'
            }
            return ''
        },

    },
]

export default registerFields
