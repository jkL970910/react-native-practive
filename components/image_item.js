import { React } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { shadow, sizes, spacing, colors } from '../constants/theme';

const CARD_HEIGHT = 400;

export default ImageItem = ({ item }) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          marginLeft: spacing.l,
          marginRight: spacing.l,
          flex: 0.7,
          justifyContent: 'center',
        }}>
        <View style={[styles.card, shadow.dark]}>
          <View style={[styles.imageBox]}>
            <Image source={item.image} style={[styles.image]} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: sizes.width
  },
  title: {
    fontWeight: '800',
    fontSize: 48,
    marginBottom: 10,
    color: colors.showingColor,
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    fontSize: 18,
    color: colors.showingColorSub,
    textAlign: 'center',
    paddingHorizontal: 64,
  },
  card: {
    height: CARD_HEIGHT,
    marginVertical: 10,
    width: sizes.width
  },
  favorite: {
    position: 'absolute',
    top: spacing.m,
    right: spacing.m,
    zIndex: 1,
  },
  imageBox: {
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: 'hidden',
    width: sizes.width - 2 * spacing.l
  },
  image: {
    height: CARD_HEIGHT,
    resizeMode: 'cover',
    width: sizes.width
  },
});
