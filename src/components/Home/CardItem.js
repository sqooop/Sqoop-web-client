import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import noImage from '../../assets/images/NoImage.svg';
import palette from '../../lib/styles/palette';
import HashTag from './HashTag';
import { withRouter } from 'react-router-dom';

const CardItem = ({ history, card }) => {
  const cardId = card.id;
  const startyear = card.startDate.substring(0, 4);
  const startmonth = card.startDate.substring(4, 6);
  const startday = card.startDate.substring(6, 8);
  const endyear = card.endDate.substring(0, 4);
  const endmonth = card.endDate.substring(4, 6);
  const endday = card.endDate.substring(6, 8);
  const jobtags = card.jobTag;
  const skilltags = card.skillTag;
  return (
    <>
      <CardTemplateBlock onClick={() => history.push(`/detail/${cardId}`)}>
        {card.imageUrl ? (
          <ImageTemplate>
            <img
              src={card.imageUrl}
              style={{ width: 'inherit', height: 'inherit' }}
              alt=""
            />
          </ImageTemplate>
        ) : (
          <ImageTemplate>
            <img
              src={noImage}
              style={{ width: 'inherit', height: 'inherit' }}
              alt=""
            />
          </ImageTemplate>
        )}
        <TitleTemplate>{card.title}</TitleTemplate>
        <DateTemplate>
          {startyear}. {startmonth}. {startday} ~ {endyear}. {endmonth}.{' '}
          {endday}
        </DateTemplate>
        <JobTagTemplate>
          {jobtags?.map((data, index) => (
            <HashTag key={index} tag={data}></HashTag>
          ))}
        </JobTagTemplate>
        <SkillTagTemplate>
          {skilltags?.map((data, index) => (
            <HashTag key={index} tag={data}></HashTag>
          ))}
        </SkillTagTemplate>
      </CardTemplateBlock>
    </>
  );
};
const CardTemplateBlock = styled.div`
  padding-top: 8px;
  width: 359px;
  height: 349px;
  display: block;
  &:hover {
    background-color: ${palette.grey01};
    cursor: pointer;
  }
`;
const ImageTemplate = styled.div`
  margin-left: 8px;
  display: inline-block;
  width: 343px;
  height: 195px;
  img {
    object-fit: cover;
  }
`;
const TitleTemplate = styled.div`
  width: 343px;
  height: 38px;
  margin: 4px 10px;
  font-size: 24px;
  font-weight: bold !important;
`;
const DateTemplate = styled.div`
  width: 343px;
  height: 20px;
  margin: 4px 10px 6px 10px;
  font-weight: normal;
`;
const JobTagTemplate = styled.div`
  // background: skyblue;
  width: 343px;
  height: 28px;
  margin: 8px 8px 6px 10px;
`;
const SkillTagTemplate = styled.div`
  // background: skyblue;
  width: 343px;
  height: 28px;
  margin: 6px 8px 20px 10px;
`;
export default withRouter(CardItem);
