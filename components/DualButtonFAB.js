import * as React from 'react';
import { FAB } from 'react-native-paper';
import { View } from 'react-native';

const DualButtonFAB = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FAB.Group
        open={false}
        icon={false}
        actions={[
          { icon: 'plus', onPress: () => console.log('Pressed add') },
          { icon: 'pencil', onPress: () => console.log('Pressed edit') },
        ]}
        onStateChange={({ open }) => console.log('FAB open state: ', open)}
        onPress={() => console.log('FAB pressed')}
      />
    </View>
  );
};

export default DualButtonFAB;
