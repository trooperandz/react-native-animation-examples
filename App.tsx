import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { LogBox, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import RootNavigation from './src/navigations';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeView}>
        <RootNavigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});

export default App;
