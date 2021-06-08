import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  font-size: 1.4rem;
  border: none;
  outline: none;
  width: 20.156vw;
  height: 13.2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 0.5rem;
  resize: none;
  &:hover {
    background-color: #eeeeee !important;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a5a5a5;
  }
  :-ms-input-placeholder {
    color: #a5a5a5;
  }
`;

const Summary = props => {
  const { text, onChangeInputs } = props;
  return (
    <TextArea
      value={text}
      onChange={onChangeInputs}
      placeholder="활동 내용 요약 입력 (50자 이내)"
    />
  );
};

export default Summary;
