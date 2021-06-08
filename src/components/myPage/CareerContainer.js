import React, { useState } from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const CareerContainerWrap = Styled.div`
  .career {
    &--container {
      margin-top: 26px;
      margin-left: 14px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      position: relative;
      z-index: 2;
    }
  }

  .title {
    box-sizing: border-box;
    width: 90px;
    display: inline-block;
    position: relative;
    z-index: 2;
  }

  .content {
    margin-bottom: 14px;
  }

  input {
    border: none;
    padding: 0;
    width: 200px;
    margin-right: 24px;
    position: relative;
    z-index: 2;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #A5A5A5;
    }
  }

  .background {
    position: absolute;
    width: 730px;
    height: 84px;
    z-index: 1;
    top: -14px;
    left: -14px;
  }
`;

const getDefault = (placeholder, title, type) => {
  switch (type) {
    case '어학':
      placeholder.title = 'ex) 영어, 중국어, 일본어';
      placeholder.testName = 'ex) TOEIC, IELTS, HSK';
      placeholder.score = 'ex) 940점, 6급';
      title.title = '언어';
      title.date = '시험 일자';
      title.testName = '시험명';
      title.score = '점수/급수';
      return;
    case '자격증':
      placeholder.title = 'ex) 건축기능사, 조리기능사';
      placeholder.testName = 'ex) 발행 기관 입력';
      title.title = '자격증명';
      title.date = '합격일';
      title.testName = '기관명';
      return;
    case '수상 내역':
      placeholder.title = 'ex) 수상명 입력';
      placeholder.testName = 'ex) 수여 기관 입력';
      title.title = '수상명';
      title.date = '수상/공모일';
      title.testName = '기관명';
      return;
    default:
      return;
  }
};

const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};

const CareerContainer = ({
  career,
  index = 0,
  type,
  currentTarget,
  setCurrentTarget,
  careerIndex,
  setCareerIndex,
  saveData,
  origin,
  data,
  match,
}) => {
  const isReadOnly = match.path === '/mypage/profile' ? true : false;
  const placeholder = { title: '', testName: '', score: '' };
  const title = { title: '', date: '', testName: '', score: '' };
  getDefault(placeholder, title, type);

  const [userInfo, setUserInfo] = useState(career);

  const typeName =
    type === '어학'
      ? 'langHistory'
      : type === '자격증'
      ? 'certificateHistory'
      : 'awardHistory';

  return (
    <CareerContainerWrap>
      <div className="career--container">
        <>
          <div
            className="background"
            onClick={() => {
              isReadOnly
                ? setCurrentTarget('')
                : setCurrentTarget('deleteCareer');
              setCareerIndex(index);
            }}
            style={
              index === careerIndex && currentTarget === 'deleteCareer'
                ? { backgroundColor: '#EEEEEE' }
                : { backgroundColor: 'white' }
            }
          ></div>
          <div className="career--container__title content">
            <span className="title">{title.title}</span>
            <input
              type="text"
              readOnly={isReadOnly}
              value={userInfo.title}
              placeholder={placeholder.title}
              onChange={event => {
                setUserInfo({ ...userInfo, title: event.target.value });
                data[index] = { ...userInfo, title: event.target.value };
                saveData({ ...origin, [typeName]: data });
              }}
              onClick={() => {
                isReadOnly ? setCurrentTarget('') : setCurrentTarget('title');
                setCareerIndex(index);
              }}
              style={
                index === careerIndex &&
                (currentTarget === 'title' || currentTarget === 'deleteCareer')
                  ? { backgroundColor: '#EEEEEE' }
                  : { backgroundColor: 'white' }
              }
            />
          </div>
          <div className="career--container__date content">
            <span className="title">{title.date}</span>
            <input
              type="text"
              readOnly={isReadOnly}
              value={userInfo.date}
              placeholder={getToday()}
              onChange={event => {
                setUserInfo({ ...userInfo, date: event.target.value });
                data[index] = { ...userInfo, date: event.target.value };
                saveData({ ...origin, [typeName]: data });
              }}
              onClick={() => {
                isReadOnly ? setCurrentTarget('') : setCurrentTarget('date');
                setCareerIndex(index);
              }}
              style={
                index === careerIndex &&
                (currentTarget === 'date' || currentTarget === 'deleteCareer')
                  ? { backgroundColor: '#EEEEEE' }
                  : { backgroundColor: 'white' }
              }
            />
          </div>
          <div className="career--container__testName content">
            <span className="title">{title.testName}</span>
            <input
              type="text"
              readOnly={isReadOnly}
              value={userInfo.testName}
              placeholder={placeholder.testName}
              onChange={event => {
                setUserInfo({ ...userInfo, testName: event.target.value });
                data[index] = { ...userInfo, testName: event.target.value };
                saveData({ ...origin, [typeName]: data });
              }}
              onClick={() => {
                isReadOnly
                  ? setCurrentTarget('')
                  : setCurrentTarget('testName');
                setCareerIndex(index);
              }}
              style={
                index === careerIndex &&
                (currentTarget === 'testName' ||
                  currentTarget === 'deleteCareer')
                  ? { backgroundColor: '#EEEEEE' }
                  : { backgroundColor: 'white' }
              }
            />
          </div>
          <div className="career--container__score content">
            <span className="title">{title.score}</span>
            {type === '어학' ? (
              <input
                type="text"
                readOnly={isReadOnly}
                value={userInfo.score}
                placeholder={placeholder.score}
                onChange={event => {
                  setUserInfo({ ...userInfo, score: event.target.value });
                  data[index] = { ...userInfo, score: event.target.value };
                  saveData({ ...origin, [typeName]: data });
                }}
                onClick={() => {
                  isReadOnly ? setCurrentTarget('') : setCurrentTarget('score');
                  setCareerIndex(index);
                }}
                style={
                  index === careerIndex &&
                  (currentTarget === 'score' ||
                    currentTarget === 'deleteCareer')
                    ? { backgroundColor: '#EEEEEE' }
                    : { backgroundColor: 'white' }
                }
              />
            ) : (
              <div></div>
            )}
          </div>
        </>
      </div>
    </CareerContainerWrap>
  );
};

export default withRouter(CareerContainer);
