import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, StyleSheet, View } from 'react-native';

import Link from '../../components/Link';

export default ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Link screen="Opacity" title="Simple Opacity" />
        <Link screen="Translate" title="Simple Translate" />
        <Link screen="Scale" title="Simple Scale" />
        <Link screen="WidthHeight" title="Width Height" />
        <Link screen="Absolute" title="Absolute" />
        <Link screen="ColorInterpolation" title="Color Interpolation" />
        <Link screen="RotateInterpolation" title="Rotate Interpolation" />
        <Link screen="PercentageWidthHeight" title="Percentage Width Height" />
        <Link screen="Easing" title="Easing" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
