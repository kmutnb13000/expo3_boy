// DataRecordingScreen.js
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import RecordForm from '../components/RecordForm';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('personalData.db');

const DataRecordingScreen = ({ navigation, route }) => {
  const { user } = route.params;
  const [data, setData] = useState({
    name: '',
    age: '',
    gender: '',
    educationLevel: '',
    occupation: '',
  });

  const handleSaveData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO personalData (name, age, gender, educationLevel, occupation, userId) VALUES (?, ?, ?, ?, ?, ?)',
        [
          data.name,
          data.age,
          data.gender,
          data.educationLevel,
          data.occupation,
          user.id,
        ],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            // Data saved successfully
            navigation.navigate('MainMenu');
          } else {
            // Handle data save error
          }
        },
        (_, error) => {
          // Handle database error
        }
      );
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <RecordForm data={data} setData={setData} />
      <Button title="Save Data" onPress={handleSaveData} />
    </View>
  );
};

export default DataRecordingScreen;
