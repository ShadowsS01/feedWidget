import React from 'react';
import { View } from 'react-native';

import Copyright from '../Copyright';

import { styles } from './styles';

export default function options() {
  return (
    <View style={styles.container}>
      <Copyright />
    </View>
  );
}