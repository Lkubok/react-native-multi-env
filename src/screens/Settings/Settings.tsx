import React, {useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {fetchData} from '../../api/api';

interface Props {}

const Settings = ({}) => {
  const {navigate} = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Text>Settings Component</Text>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </>
  );
};

export default Settings;
