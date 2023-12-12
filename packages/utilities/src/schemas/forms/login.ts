import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  //   firstName: yup.string().required('First Name is required'),
  //   lastName: yup.string().required('Last Name is required'),
  //   email: yup.string().email('Invalid email').required('Email is required'),
  //   phoneNumber: yup
  //     .string()
  //     .matches(/^[0-9]+$/, 'Must be only digits')
  //     .min(9, 'Must be exactly 9 digits')
  //     .max(9, 'Must be exactly 9 digits')
  //     .required('Phone Number is required'),
  //   password: yup
  //     .string()
  //     .min(8, ({ min }) => `Password must be at least ${min} characters`)
  //     .required('Password is required'),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref('password'), null], 'Passwords must match')
  //     .required('Confirm Password is required'),
});

export const loginDefaultValues = {
  username: '',
  password: '',
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phoneNumber: '',
  //   password: '',
  //   confirmPassword: '',
};
