import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGroup } from '../../store/modules/activity';
import Group from '../../components/createActivity/Group';

const TitleContainer = () => {
  const dispatch = useDispatch();
  const saveGroup = data => dispatch(setGroup(data));

  const group = useSelector(state => state.activity.group);

  const onChangeInputs = evt => {
    const value = evt.target.value;
    if (value.length <= 18) {
      saveGroup(value);
    }
  };
  return <Group onChangeInputs={onChangeInputs} text={group} />;
};

export default TitleContainer;
