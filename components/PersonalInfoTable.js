// PersonalInfoTable.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalInfoTable = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Name: {data.name}</Text>
      <Text>Age: {data.age}</Text>
      <Text>Gender: {data.gender}</Text>
      <Text>Education Level: {data.education}</Text>
      <Text>Occupation: {data.occupation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PersonalInfoTable;
