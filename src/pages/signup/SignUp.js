import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import Header_SignUp from './semantic/Header_SignUp';
import SignUp_Article from './semantic/Article_SignUp';
export default function SignUp() {
  return (
    <StSignUpContainer>
      <Header_SignUp />
      <SignUp_Article />
    </StSignUpContainer>
  );
}

const StSignUpContainer = styled.div``;
