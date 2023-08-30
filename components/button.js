import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default NavigationButton = ({ scrollTo, scrollBack, headOrTail }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', height: 64 }}>
      <TouchableOpacity
        onPress={scrollBack}
        style={[styles.button, {flex: 2}]}
        activeOpacity={0.8}
      >
        <AntDesign name="leftcircleo" size={32} color='#493d8a' style={{opacity: headOrTail === 0 ? 0.5 : 1}} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={scrollTo}
        style={[styles.button, {flex: 2}]}
        activeOpacity={0.8}
      >
        <AntDesign name="rightcircleo" size={32} color='#493d8a' style={{opacity: headOrTail === 1 ? 0.5 : 1}} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 96,
    height: 96
  },
});