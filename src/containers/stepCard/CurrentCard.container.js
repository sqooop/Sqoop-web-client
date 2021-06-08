import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAnswer } from '../../store/modules/userCardInfo';
import { setPrevIndex } from '../../store/modules/cardIndex';
import {
  setTextValue,
  setTextLimit,
  setSaved,
  setNotSaved,
} from '../../store/modules/currentCard';
import CurrentCard from '../../components/stepCard/CurrentCard';
import { createCard, updateCard } from '../../lib/api/stepCard';

const CurrentCardContainer = ({ history }) => {
  const userCardInfo = useSelector(state => state.userCardInfo);
  const { questions, answers, guide, id } = userCardInfo;
  const cardIndex = useSelector(state => state.cardIndex);
  const { currentIndex, writtenIndex, previousIndex } = cardIndex;
  const currentCard = useSelector(state => state.currentCard);
  const { saved, notSaved, textValue, textLimit } = currentCard;

  const dispatch = useDispatch();
  const saveAnswer = (answer, idx) => dispatch(setAnswer(answer, idx));
  const saveTextValue = text => dispatch(setTextValue(text));
  const saveSaved = data => dispatch(setSaved(data));
  const saveNotSaved = data => dispatch(setNotSaved(data));
  const saveTextLimit = number => dispatch(setTextLimit(number));
  const savePrevIndex = idx => dispatch(setPrevIndex(idx));

  const [className, setClassName] = useState('card');

  const onClickFunc = () => {
    saveAnswer(textValue, currentIndex);
    const card = {
      ActivityId: id,
      number: currentIndex + 1,
      question: questions[currentIndex],
      content: answers[currentIndex],
    };

    if (currentIndex === writtenIndex) {
      saveSaved(true);
      (async () => {
        await createCard(card);
      })();
      setTimeout(() => {
        saveTextValue(answers[currentIndex + 1]);
        savePrevIndex(currentIndex);
        history.push(`/steps/${currentIndex + 1}`);
      }, 2000);
    } else {
      saveSaved(true);
      (async () => {
        await updateCard(card);
        // className
      })();
    }
  };

  // if (notSaved && ) {
  //   history.goForward();
  //   saveModalActive(true);
  // }

  return (
    <CurrentCard
      index={parseInt(currentIndex)}
      prevIndex={parseInt(previousIndex)}
      question={questions[currentIndex]}
      answer={answers[parseInt(currentIndex)]}
      textValue={textValue}
      saveTextValue={saveTextValue}
      saved={saved}
      saveSaved={saveSaved}
      notSaved={notSaved}
      saveNotSaved={saveNotSaved}
      textLimit={textLimit}
      saveTextLimit={saveTextLimit}
      guide={guide[parseInt(currentIndex)]}
      onClickFunc={onClickFunc}
      className={className}
      setClassName={setClassName}
    />
  );
};

export default withRouter(CurrentCardContainer);
