import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './HomeTabs/Home';
import Stages from './HomeTabs/Stages';
import StagesPostuler from './HomeTabs/StagesPostuler';
import Resultats from './HomeTabs/Resultats';

const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Stages':
              iconName = 'briefcase';
              break;
            case 'StagesPostuler':
              iconName = 'clipboard';
              break;
            case 'Resultats':
              iconName = 'check';
              break;
            default:
              iconName = 'question';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f5f5f5',
          borderTopColor: '#ccc',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Stages" component={Stages} options={{ tabBarLabel: 'Stages' }} />
      <Tab.Screen name="StagesPostuler" component={StagesPostuler} options={{ tabBarLabel: 'Candidatures' }} />
      <Tab.Screen name="Resultats" component={Resultats} options={{ tabBarLabel: 'Resultats' }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomePage;
 
/* import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profiles from './HomeDrawers/Profiles';
import Settings from './HomeDrawers/Settings';
import About from './HomeDrawers/Abouts';
import Logout from './HomeDrawers/Deconnexion';

// Create the Drawer Navigator
const Drawer = createDrawerNavigator();

const HomePage = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Profiles':
                iconName = 'user';
                break;
              case 'Settings':
                iconName = 'cog';
                break;
              case 'About':
                iconName = 'info-circle';
                break;
              case 'Logout':
                iconName = 'sign-out';
                break;
              default:
                iconName = 'question';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          drawerActiveTintColor: '#007bff',
          drawerInactiveTintColor: 'gray',
        })}
      >
        <Drawer.Screen
          name="Profiles"
          component={Profiles}
          options={{ drawerLabel: 'My Profiles' }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{ drawerLabel: 'Settings' }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{ drawerLabel: 'About' }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{ drawerLabel: 'Logout' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default HomePage;
 */