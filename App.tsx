import { SafeAreaView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.infoLogo} source={require('./info-logo.png')} blurRadius={0} />
      <Image style={styles.reactLogo} source={require('./react-logo.png')} blurRadius={8} />
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',

  },
  infoLogo: {
    width: '80%',
    resizeMode: 'contain',
    opacity: 1,
    zIndex: 1,
  },
  reactLogo: {
    height: 400,
    resizeMode: 'contain',
    position: 'absolute',
    opacity: .3,
  },
});
