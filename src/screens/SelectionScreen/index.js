import React from 'react';
import styled from 'styled-components/native';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const Title = styled.Text`
  font-size: 20px;
  color: gray;
  margin-bottom: 18px;
`;

export default ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Opacity')}>
          <Title>Simple Opacity</Title>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Translate')}>
          <Title>Simple Translate</Title>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Scale')}>
          <Title>Simple Scale</Title>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('WidthHeight')}>
          <Title>Width Height</Title>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
  },
});
