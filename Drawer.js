import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import Bars from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

import Dashboard from './screens/Dashboard';
import Mensagens from './screens/Mensagens';
import Contato from './screens/Contato';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={[{ flex: 1 }, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                marginHorizontal: 5,
                margin: 2,
              }}
              onPress={() => navigation.openDrawer()}
            >
              <Bars name="bars" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen name="Dashboard">
          {(props) => <Dashboard {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Mensagens">
          {(props) => <Mensagens {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Contato">
          {(props) => <Contato {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View>
        <View style={{ flex: 0.4, margin: 20 }}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/be/86/52/be8652da66c4fefa7c9a3320ef7dea9a.jpg',
              height: 60,
              width: 60,
              scale: 0.5,
            }}
            resizeMode="cover"
            style={styles.avatar}
          />
          <Text style={{ fontSize: 20 }}>Drawer Menu</Text>
          <Text style={{ fontSize: 15 }}>webruxim@gmail.com</Text>
        </View>
        <View style={{ marginTop: 100 }}>
          <DrawerItem
            label="Dashboard"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate('Dashboard')}
            icon={() => (
              <Icon name="chevron-circle-down" size={20} color="#fff" />
            )}
          />
          <DrawerItem
            label="Mensagens"
            labelStyle={{ color: '#fff', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Mensagens')}
            icon={() => (
              <Icon name="chevron-circle-down" size={20} color="#fff" />
            )}
          />
          <DrawerItem
            label="Contato"
            labelStyle={{ color: '#fff', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Contato')}
            icon={() => (
              <Icon name="chevron-circle-down" size={20} color="#fff" />
            )}
          />
        </View>
      </View>

      <View>
        <DrawerItem
          label="Logout"
          labelStyle={{ color: '#fff', marginLeft: -16 }}
          style={{ alignItems: 'flex-start', marginVertical: 0 }}
          icon={() => (
            <Icon name="chevron-circle-down" size={20} color="#fff" />
          )}
          onPress={() => alert('Você Clicou no botão Logout')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <LinearGradient style={{ flex: 1 }} colors={['#E94057', '#4A00E0']}>
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'white', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});
