import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import { useEffect, useState } from 'react';
import useInput from '../../hooks/useInput';
import { login } from '../../services/api';
import Title from '../atoms/Title';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, setEmail } from '../../store/slices/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.email);

  const { value, handleOnChange } = useInput({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log(value.username);
  }, [value.username]);

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  return (
    <Container>
      <Title>로그인</Title>
      <span>{email}</span>
      <InputGroup
        id="email"
        name="email"
        type="email"
        placeholder="이메일(아이디)를 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        name="password"
        type="password"
        placeholder="*********"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          // api 로그인 요청
          dispatch(
            loginRequest({
              email: value.email,
              password: value.password,
            })
          );
        }}
      >
        로그인
      </Button>
    </Container>
  );
};

export default LoginForm;