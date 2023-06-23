// RecordForm.js (inside the components folder)
import React from 'react';
import { View, TextInput } from 'react-native';

const RecordForm = ({ data, setData }) => {
  return (
    <View>
      <TextInput
        placeholder="Name"
        value={data.name}
        onChangeText={(text) => setData({ ...data, name: text })}
      />
      <TextInput
        placeholder="Age"
        value={data.age}
        onChangeText={(text) => setData({ ...data, age: text })}
      />
      <TextInput
        placeholder="Gender"
        value={data.gender}
        onChangeText={(text) => setData({ ...data, gender: text })}
      />
      <TextInput
        placeholder="Education Level"
        value={data.educationLevel}
        onChangeText={(text) => setData({ ...data, educationLevel: text })}
      />
      <TextInput
        placeholder="Occupation"
        value={data.occupation}
        onChangeText={(text) => setData({ ...data, occupation: text })}
      />
    </View>
  );
};

export default RecordForm;
