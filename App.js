import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { setStatusBarStyle } from 'expo-status-bar'; 

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://forflight.netlify.app' }}
    />
  );
}
setStatusBarStyle('auto');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
