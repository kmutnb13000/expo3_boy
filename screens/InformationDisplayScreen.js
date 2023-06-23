// InformationDisplayScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import PersonalInfoTable from '../components/PersonalInfoTable';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('personalData.db');

const InformationDisplayScreen = ({ navigation, route }) => {
  const { user } = route.params;
  const [personalData, setPersonalData] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM personalData WHERE userId = ?',
        [user.id],
        (_, { rows }) => {
          setPersonalData(rows._array);
        },
        (_, error) => {
          // Handle database error
        }
      );
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PersonalInfoTable data={personalData} />
    </View>
  );
};

export default InformationDisplayScreen;
