import React from 'react';
import {
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

class ImageTile extends React.PureComponent {
  render() {
    const { item, index, selected, selectImage, selectedItemNumber, renderSelectedComponent } = this.props;
    if (!item) return null;
    return (
      <TouchableHighlight
        style={{ opacity: selected ? 0.7 : 1 }}
        underlayColor='transparent'
        onPress={() => selectImage(index)} >
        <View style={{ position: 'relative' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground
              style={{ width: width / 4, height: width / 4 }}
              source={{ uri: item.uri }} >
              {!selected
                ? <View style={styles.empty}></View>
                : <View style={styles.filled}>
                  <Text style={{ fontWeight: 'bold' }}>{selectedItemNumber}</Text>
                </View>
              }
            </ImageBackground>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  empty: {
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
    right: 5,
    top: 5,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 4
  },
  filled: {
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
    right: 5,
    top: 5,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ImageTile;