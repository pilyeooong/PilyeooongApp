import React, { useRef } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import { validateSignup } from '../../utils';
import CustomButton from '../../components/CustomButton';

function SignupScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);

  const signup = useForm({
    initialValue: { email: '', password: '', passwordConfirm: '' },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    console.log(signup.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          inputMode="email"
          touched={signup.touched.email}
          error={signup.errors.email}
          returnKeyType={'next'}
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          textContentType="oneTimeCode"
          secureTextEntry
          error={signup.errors.password}
          touched={signup.touched.password}
          returnKeyType={'next'}
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 화인"
          textContentType="oneTimeCode"
          secureTextEntry
          error={signup.errors.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          onSubmitEditing={handleSubmit}
          {...signup.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label={'회원가입'} onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default SignupScreen;
