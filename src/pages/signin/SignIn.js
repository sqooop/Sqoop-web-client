import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../containers/signIn/Input.container';
import Button from '../../containers/signIn/Button.container';
import WarnMessage from '../../containers/signIn/WarnMessage.container';
import Logo from '../../components/signIn/Logo';
import Block from '../../components/signIn/Block';
import { withRouter } from 'react-router-dom';

const SignInWrap = styled.div`
  width: 100%;
  padding-left: 14.297vw;
  padding-right: 14.297vw;
  margin-top: 23.472222vh;
  overflow: hidden;
`;
const SignIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SignInWrap>
      <Logo />
      <Input />
      <WarnMessage />
      <Button />
      <Block />
    </SignInWrap>
  );
};

export default withRouter(SignIn);
