import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';

import Button from '../Button';

storiesOf('react-native-shadow-animation', module)
  .add(
    'Button',
    () => 
      <View style={{ padding: 20 }}>
        <Button>Sample button component</Button>
      </View>
  );
