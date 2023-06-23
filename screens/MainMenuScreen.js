

//import React in our code
import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Touchable, TouchableOpacity
} from 'react-native';

import Btn2 from './Btn2';



const MainMenuScreen = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '##E996F7'}}>


<View
          style={{
            backgroundColor: '#C83DD3',
            height: '9%',
            width: '100%',
            alignItems: 'center'
          }}>
      <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',marginTop: 20
            
          }}>
          โครงการสำมะโนธุรกิจและอุตสาหกรรม พ.ศ.2565
        </Text>
</View>

<View
          style={{
            backgroundColor: '#F7FC60',
            height: '9%',
            width: '100%',
            alignItems: 'center'
          }}>
      <Text
          style={{
            color: 'blue',
            fontSize: 16,
            fontWeight: 'bold',marginTop: 20
            
          }}>
          เมนูหลัก
        </Text>
</View>


<View
          style={{
            backgroundColor: '#F7FC60',
            height: '20%',
            width: '100%',
            alignItems: 'center'
          }}>
      <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',marginTop: 20
            
          }}>
           
        </Text>
        <Text numberOfLines={2}>
        นายทดสอบ สถิติ , {user.username}!
         จังหวัด <Text
          style={{
            color: 'blue',
            fontSize: 25,
            fontWeight: 'bold',marginTop: 20
            
          }}>
          กรุงเทพมหานคร
        </Text>
      </Text>
</View>


<View
          style={{
            backgroundColor: '#F7FC60',
            height: '9%',
            width: '100%',
            alignItems: 'center'
          }}>
      <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',marginTop: 20
            
          }}>
          จังหวัด <Text
          style={{
            color: 'blue',
            fontSize: 25,
            fontWeight: 'bold',marginTop: 20
            
          }}>
          กรุงเทพมหานคร
        </Text>
  </Text>
        
</View>



        

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={1}>
          <Image
            source={require("./assets/img_dosurvey.jpg")} 
            style={ styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
         

<Btn2 bgColor={'white'} textColor='black' btnLabel="บันทึกข้อมูล" Press={() => props.navigation.navigate("Main3")} />
 

            
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={1}   
            >
          <Image
            source={require("./assets/img_senddata.jpg")} 
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          
<Btn2 bgColor={'white'} textColor='black' btnLabel="ส่งข้อมูล" Press={() => props.navigation.navigate("Main4")} />
 
          
        </TouchableOpacity   >
      </View>



      <View style={styles.container}>
       
        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={1}    >
          <Image
            source={require("./assets/switch.png")} 
            style={styles.buttonImageIconStyle}
        
          />
          <View style={styles.buttonIconSeparatorStyle} />
          
          

          <Btn2 bgColor={'#dc4e41'} textColor='black' btnLabel=" ออกจากระบบ" Press={() => props.navigation.navigate("Login")} />
 
{/* #dc4e41 */}
        </TouchableOpacity>


       


      </View>


    </SafeAreaView>



  );



};









const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 90,
    width: 100,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 90,
  },
});



export default MainMenuScreen;