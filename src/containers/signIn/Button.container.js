import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWarning, setToken } from '../../store/modules/signIn';
import Button from '../../components/signIn/Button';
import { signin } from '../../lib/api/auth';
import { withRouter } from 'react-router-dom';

const ButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.signIn.email);
  const password = useSelector(state => state.signIn.password);
  const saveWarning = data => dispatch(setWarning(data));
  const saveToken = data => dispatch(setToken(data));

  const onClick = async () => {
    try {
      const { data } = await signin({ email, password });
      sessionStorage.setItem('token', data.data.accessToken);
      saveToken(data.data.accessToken);
    } catch (e) {
      saveWarning('이메일 혹은 비밀번호를 확인해주세요');
      throw e;
    }
    window.location.reload();
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <>
      <Button
        onKeyPress={onKeyPress}
        onClick={onClick}
        color={email && password ? '#195bff' : '#a5a5a5'}
        content="로그인"
      />
    </>
  );
};

export default withRouter(ButtonContainer);
