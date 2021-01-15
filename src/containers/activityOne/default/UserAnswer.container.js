import React from 'react';
import { useSelector } from 'react-redux';
import UserData from '../../../components/activityOne/default/UserData';

const UserAnswerContainer = () => {
  const answer = useSelector(state => state.userdata.useranswer);
  const question = useSelector(state => state.userdata.question);
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(idx => (
        <UserData answer={answer[idx]} question={question[idx]} />
      ))}
    </>
  );
};

export default UserAnswerContainer;