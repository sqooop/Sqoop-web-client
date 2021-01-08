import React from 'react';
import styled from 'styled-components';

const DefaultData = props => {
  const { text, isStar } = props;
  return (
    <StyleDiv>
      {text}
      {isStar ? <span style={{ color: '#00FF84' }}>*</span> : <></>}
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  display: flex;
  width: 80px;
  height: 21px;
  margin-top: 15px;
  font-size: 14px !important;
  line-height: 150%;
`;

export default DefaultData;
