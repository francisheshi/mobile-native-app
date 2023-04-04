import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          // flexBasis: 100, // same as setting the height
          // flexGrow: 1, // same as setting the width
          width: 100,
          height: 100,
          // alignSelf: 'flex-start'
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: 'absolute'
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100
        }}
      />
      {/* <View
        style={{
          backgroundColor: 'grey',
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          width: 100,
          height: 100
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center', // the alignment of each item inside the line
    alignContent: 'center' // the alignment of the whole line
  },
});
