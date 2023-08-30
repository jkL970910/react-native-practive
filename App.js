import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ImageCarousel from './components/image_carousel'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageCarousel />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
