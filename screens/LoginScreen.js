// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert,Text,Switch } from 'react-native';
import * as SQLite from 'expo-sqlite';
import Background from './Background';

const db = SQLite.openDatabase('personalData.db');

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleLogin = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ?',
        [username],
        (_, { rows }) => {
          if (rows.length > 0) {
            const user = rows.item(0);
            if (user.password === password) {
              navigation.navigate('MainMenu', { user });
            } else {
              Alert.alert('รหัสผ่านผิด');
            }
          } else {
            //navigation.navigate('MainMenu', { user });
            Alert.alert('ไม่พบชื่อผู้ใช้งาน');
          }
        },
        (_, error) => {
          // Handle database error
        }
      );
    });
  };

  return (
    <Background>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ชื่อผู้ใช้งาน"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="รหัสผ่าน"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.rememberPasswordContainer}>
        <Text>จดจำรหัสผ่าน</Text>
        <Switch
          value={rememberPassword}
          onValueChange={setRememberPassword}
        />
      </View>
      <Button  title="เข่าสู่ระบบ" onPress={handleLogin} />
    </View>
</Background>

  );
};

const styles = StyleSheet.create({
  container: {
    
    height: '40%',
            width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', marginTop: '140%', marginLeft: '30%',
  },
  input: {
    backgroundColor: 'yellow',
    width: '90%',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rememberPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },




});

export default LoginScreen;
