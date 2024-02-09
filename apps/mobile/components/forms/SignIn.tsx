import { Button, Input } from '@klectik/ui/src';
import { Flex } from '@klectik/ui/src/components/layout/Flex';
import { Text } from '@klectik/ui/src/components/text/Text';
import useForwardedRef from '@klectik/utils/src/hooks/useForwardedRef';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ModalRef } from '../layout/BottomSheetModal';
// import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useAuth } from '@utilities/contexts/AuthContext';
import {
    loginDefaultValues,
    loginSchema,
} from '@utilities/schemas/forms/login';
import * as mutations from '@utilities/schemas/graphql/mutations';
import { useRouter } from 'expo-router';
import { Formik, useFormikContext } from 'formik';
//import { Button } from '@theme';

interface LoginProps {
    redirect: string | boolean;
    modalClosed: boolean;
}

const SignIn = forwardRef<ModalRef, LoginProps>((props, ref) => {
    const { redirect, modalClosed } = props;

    const loginModalRef = useForwardedRef(ref);
    const emailRef = useRef();
    const passwordRef = useRef();

    const router = useRouter();
    const { signIn } = useAuth();
    //const {} = useModal();
    //const { openAuthBottomSheet, setOpenAuthBottomSheet } = useModal();
    const [loginUser] = useMutation(mutations.LOGIN_USER);

    const [formErrorMessage, setFormErrorMessage] = useState<string | boolean>(
        false
    );

    const FormObserver = () => {
        const { resetForm } = useFormikContext();

        useEffect(() => {
            if (!modalClosed) {
                resetForm({
                    values: loginDefaultValues,
                });
                setFormErrorMessage(false);
            }
        }, [modalClosed]);

        return null;
    };

    async function handleSubmit(e) {
        e.preventDefault();

        // Get email and password input values
        const email = emailRef.current;
        const password = passwordRef.current;

        // Calls `signIn` function from the context
        const { error } = await signIn({ email, password });

        if (error) {
            alert('error signing in');
        } else {
            // Redirect user to Dashboard
            //history.push('/');
        }
    }

    return (
        <Flex>
            <Formik
                initialValues={loginDefaultValues}
                validationSchema={loginSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={handleSubmit}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                }) => (
                    <Flex style={{ marginHorizontal: 20 }}>
                        <FormObserver />
                        <Text style={styles.label}>Username</Text>
                        <Input
                            style={styles.input}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            placeholder="Enter your username"
                            autoCapitalize="none"
                            value={values?.username}
                            borderColor={
                                errors?.username || formErrorMessage
                                    ? 'red'
                                    : 'black'
                            }
                            ref={emailRef}
                        />

                        <Text style={styles.label}>Password</Text>
                        <Input
                            style={styles.input}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            placeholder="Enter your password"
                            secureTextEntry
                            autoCapitalize="none"
                            value={values?.password}
                            borderColor={
                                errors?.password || formErrorMessage
                                    ? 'red'
                                    : 'black'
                            }
                        />
                        {errors?.username && <Text>{errors.username}</Text>}
                        {errors?.password && <Text>{errors.password}</Text>}

                        {formErrorMessage && (
                            <Text style={{ color: 'white' }}>
                                {formErrorMessage}
                            </Text>
                        )}

                        <Button
                            theme="detrimental"
                            onPress={() => handleSubmit()}
                            hapticFeedback={true}
                        >
                            Login
                        </Button>

                        <Button style={{ marginTop: 20 }} hapticFeedback={true}>
                            Register
                        </Button>
                    </Flex>
                )}
            </Formik>
        </Flex>
    );
});

SignIn.displayName = 'Login';

export default SignIn;

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        marginBottom: 5,
        borderRadius: 8,
        height: 30,
    },
});
