// @ts-nocheck

import React, {useEffect} from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

// import {fetchData} from '../../api/api';

import {fetchCovidData} from '../../store/slices/counterSlice';

// Platform.OS === "web"

interface Props {}

const Settings = ({}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Text>Settings Component</Text>
      <TouchableOpacity
        onPress={() => navigate('Home')}
        style={Platform.OS === 'web' && {backgroundColor: 'red'}}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </>
  );
};

export default Settings;
