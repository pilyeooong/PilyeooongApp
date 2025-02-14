import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import InputField from '../../components/InputField';

function LoginScreen() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  //
  // const handleChangeEmail = (text: string) => {
  //   setEmail(text);
  // };
  //
  // const handleChangePassword = (text: string) => {
  //   setPassword(text);
  // };

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChangeText = (name: string, text: string) => {
    setValues({
      ...values,
      [name]: text,
    });
  };

  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          inputMode="email"
          value={values.email}
          onChangeText={text => handleChangeText('email', text)}
          onBlur={() => handleBlur('email')}
          touched={touched.email}
          error={'이메일을 입력하세요'}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          value={values.password}
          onChangeText={text => handleChangeText('password', text)}
          onBlur={() => handleBlur('password')}
          touched={touched.password}
          error={'비밀번호를 입력하세요'}
        />
      </View>
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
  },
});

export default LoginScreen;
