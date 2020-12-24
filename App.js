import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,TouchableOpacity,StatusBar} from 'react-native'
import {Icon} from 'react-native-elements'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import LinearGradient from 'expo-linear-gradient';
import Connexion from './component/Connexion'
import HomeScreen from './component/HomeScreen'
import Profils from './component/Profils'
import Notification from './component/Notification'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTabs = createMaterialBottomTabNavigator();

const Home =({navigation})=>{
  return(
    <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
        <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
          <View style={styles.containerImage}>
            <Image source={require('./assets/logo_uac2.png')} resizeMode="cover" style={styles.image}/>
          </View>
          <View style={{marginVertical: 60}}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Connexion')}>
              <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Commencer</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

class App extends Component {
  render() {

    bottomTabNav =()=>{
      return(
        <BottomTabs.Navigator>
          <BottomTabs.Screen name="HomeScreen" component={HomeScreen} options={{tabBarColor: '#128800',tabBarIcon:() => <Icon size={ 20 } name={ 'home' } color={ 'white' }/> }}/>
          <BottomTabs.Screen name="Notification" component={Notification} options={{tabBarColor: '#128800',tabBarIcon:() => <Icon size={ 20 } name={ 'comment' } color={ 'white' }/> }}/>
          <BottomTabs.Screen name="Profils" component={Profils} options={{tabBarColor: '#128800',tabBarIcon:() => <Icon size={ 20 } name={ 'person' } color={ 'white' }/> }}/>
        </BottomTabs.Navigator>
      )
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
          <Stack.Screen name="Connexion" component={Connexion} options={{headerShown: false,}} />
          <Stack.Screen name="HomeScreen" children={bottomTabNav} options={{headerShown: false,}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#128800'
  },
  containerImage: {
    width: 200,
    height: 205,
    marginVertical: 80
  },
  image: {
    width:'100%',
    height:'100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    elevation: 3,
    backgroundColor: 'red',
    borderRadius: 5
,  }
})
export default App