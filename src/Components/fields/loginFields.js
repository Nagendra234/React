import Input from './Input'

const loginFields = [
    {
        name: 'email',
        label: 'User Name or Email Address',
        component: Input,
        validate: (value) => {
            if (!value) {
                return 'Username is Required'
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
                return 'Password Required'
            }
            return ''
        },

    },
]

export default loginFields
