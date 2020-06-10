import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import {   
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } 
  from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Image,AsyncStorage } from 'react-native';
import { Tile } from 'react-native-elements';
import { SplashScreen } from 'expo';


import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import MeScreen from './src/screens/MeScreen';
import SearchScreen from './src/screens/SearchScreen';
import albumData from "./src/json/albums.json";
import ShareScreen from './src/screens/ShareScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";

const AlbumStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="健康類別" 
          component={AlbumScreen} 
          options={{
            title: albumData.albumTitle,
            headerStyle:{ backgroundColor:'#2B475D',
            height:90,
            
            },
            
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
              color:'#ffffff'
            }, 
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
               
              <Ionicons 
                name={'ios-menu'}
                color='#fff' 
                size={30} 
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),  
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={({route})=>({
           
            title: '步行紀錄',
            headerStyle: {
              backgroundColor: '#2B475D',
              height:90,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },  
           })}
        />      
      </Stack.Navigator>
  );
}

const SearchStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{
            title: 'Search',
            headerStyle: {
              borderColor:'#2B475D',
             
              backgroundColor: '#2B475D',
              height:90,
            },
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
              color:'#fff'
            },
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color='#fff' 
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),              
          }}
        />  
      </Stack.Navigator>
  );
}

const ShareStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Share" 
          component={ShareScreen} 
          options={{
            headerStyle: {
              borderColor:'#2B475D',
             
              backgroundColor: '#2B475D',
              height:90,
            },
            title: 'Share',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20,
              color:'#fff'
            },
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color='#fff' 
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),              
          }}
        />  
      </Stack.Navigator>
  );
}

const MeStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Me" 
          component={MeScreen} 
          options={{
            headerStyle: {
              borderColor:'#2B475D',
             
              backgroundColor: '#2B475D',
              height:90,
            },
            title: '個人資料',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
              color:'#fff',
            }, 
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color='#fff' 
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),            
          }}
        />  
      </Stack.Navigator>
  );
}

const SettingsStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            headerStyle: {
              borderColor:'#2B475D',
             
              backgroundColor: '#2B475D',
              height:90,
            },
            title: 'Settings',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20,
              color:'#fff'
            },
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color='#fff' 
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),              
          }}
        />  
      </Stack.Navigator>
  );
}



const CustomDrawerAnimatedContent = ({ progress, ...rest }) => {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <DrawerItemList {...rest} />
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const CustomDrawerContent = ({ ...rest }) => {
  return (
    
    <DrawerContentScrollView style={{marginTop: 120}} {...rest}>
     
<DrawerItemList stle={{paddingTop:30}}{...rest} />
    </DrawerContentScrollView>
    
  );
}

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
  return (
    <NavigationContainer 
    initialState={initialNavigationState}
    onStateChange={(state)=>
      AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
    }
  >
     <Drawer.Navigator 
    
    drawerStyle={{
      width: '100%', 
      width: 414,

      marginTop:2,
      backgroundColor:'#2B475D',
      
    }}
    drawerContentOptions={{
      activeBackgroundColor: '#DDAA00',
      activeTintColor:'#ffffff',
      itemStyle: { marginLeft:0, marginRight: 0 },
      labelStyle: { fontSize: 20,color:'#ffffff' },
      
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}
  >
        <Drawer.Screen 
          name="Album" 
          component={AlbumStack} 
          options={
            {
              drawerLabel: 'Home',
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={require('./img/Home.png')}
                  style={{width:40, height:40, marginLeft:110, marginTop:10,  marginBottom:12, tintColor: tintColor }}
                />
              ),            
            }
          }
          />
        <Drawer.Screen 
          name="Search" 
          component={SearchStack} 
          options={
            {
              drawerLabel: 'Search',
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={require('./img/search.png')}
                  style={{width:40, height:40, marginLeft:110, marginTop:10,  marginBottom:12, tintColor: tintColor }}
                />
              ),            
            }
          }
        />    
        <Drawer.Screen 
          name="Share" 
          component={ShareStack} 
          options={
            {
              drawerLabel: 'Share',
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={require('./img/share.png')}
                  style={{width:40, height:40, marginLeft:110, marginTop:10,  marginBottom:12, tintColor: tintColor }}
                />
              ),            
            }
          }
        />
        <Drawer.Screen 
          name="Settings" 
          component={MeStack} 
          options={
            {
              drawerLabel: 'Account',
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={require('./img/user.png')}
                  style={{width:40, height:40, marginLeft:110, marginTop:10, marginBottom:12, tintColor: tintColor }}
                />
              ),            
            }
          }
        />
        <Drawer.Screen 
          name="settings" 
          component={SettingsStack} 
          options={
            {
              drawerLabel: 'Setting',
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={require('./img/setting.png')}
                  style={{width:40, height:40, marginLeft:110, marginTop:10, marginBottom:12, tintColor: tintColor }}
                />
              ),            
            }
          }
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
}
export default App;