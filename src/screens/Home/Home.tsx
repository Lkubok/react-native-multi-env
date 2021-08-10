// @ts-nocheck

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../store/slices/counterSlice';

interface Props {}

const Home = ({}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const count = useSelector(state => state.counter.value);

  return (
    <>
      <Text>Home Component</Text>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => navigate('Settings')}>
        <Text>Go Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Add count</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>decrement</Text>
      </TouchableOpacity>
    </>
  );
};

export default Home;
