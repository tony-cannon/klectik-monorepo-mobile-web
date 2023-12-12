import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useMutation } from '@apollo/client';
import * as mutations from '@utilities/schemas/graphql/mutations';
import { Formik, useFormikContext } from 'formik';
import {
  loginDefaultValues,
  loginSchema,
} from '@utilities/schemas/forms/login';
import { useAuth } from '@utilities/contexts/AuthContext';
import { useModal } from '@utilities/contexts/ModalContext';
import { Button } from '@theme';

const Login = ({ redirect }: { redirect: string | boolean }) => {
  const router = useRouter();
  const { login } = useAuth();
  const {} = useModal();
  const { openAuthBottomSheet, setOpenAuthBottomSheet } = useModal();
  const [loginUser, { data, loading, error, reset }] = useMutation(
    mutations.LOGIN_USER
  );

  const [formErrorMessage, setFormErrorMessage] = useState<string | boolean>(
    false
  );

  const FormObserver = () => {
    const { resetForm } = useFormikContext();

    useEffect(() => {
      if (!openAuthBottomSheet) {
        resetForm({
          values: loginDefaultValues,
        });
        setFormErrorMessage(false);
      }
    }, [openAuthBottomSheet]);

    return null;
  };

  return (
    <Formik
      initialValues={loginDefaultValues}
      validationSchema={loginSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (values) => {
        try {
          loginUser({
            variables: {
              input: {
                identifier: values.username,
                password: values.password,
                provider: 'local',
              },
            },
          })
            .then((res) => {
              login(res.data.login);

              router.push(`/${redirect}`);
              // close bottom sheet
              setOpenAuthBottomSheet(false);
            })
            .catch((err) => {
              const errorCode = err.graphQLErrors[0].extensions.error.name;

              if (errorCode === 'ValidationError') {
                console.log(
                  'err1 :::: ' + err.graphQLErrors[0].extensions.error.name
                );
                setFormErrorMessage('Incorrect username or password');
              }
            })
            .finally(() => {});
        } catch (error: any) {
          console.log('error :::: ' + error);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={{ marginHorizontal: 20 }}>
          <FormObserver />
          <Text style={styles.label}>Username</Text>
          <Input
            style={styles.input}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            placeholder='Enter your username'
            autoCapitalize='none'
            value={values?.username}
            borderColor={
              errors?.username || formErrorMessage ? 'red' : 'transparent'
            }
          />

          <Text style={(styles.label, styles.input)}>Password</Text>
          <Input
            style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder='Enter your password'
            secureTextEntry
            autoCapitalize='none'
            value={values?.password}
            borderColor={
              errors?.password || formErrorMessage ? 'red' : 'transparent'
            }
          />
          {errors?.username && <Text>{errors.username}</Text>}
          {errors?.password && <Text>{errors.password}</Text>}

          {formErrorMessage && (
            <Text style={{ color: 'white' }}>{formErrorMessage}</Text>
          )}

          <Button onPress={() => handleSubmit()}>Login</Button>

          <Button style={{ marginTop: 20 }}>Register</Button>
        </View>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    marginBottom: 5,
  },
});
