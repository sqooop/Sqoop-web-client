import React from 'react';
import LastCard from '../../components/stepCard/LastCard';
import { useSelector } from 'react-redux';

const LastCardContainer = () => {
  const id = useSelector(state => state.userCardInfo.id);

  return <LastCard id={id} />;
};

export default LastCardContainer;
