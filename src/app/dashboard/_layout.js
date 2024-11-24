import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../component/Drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={DrawerContent}>
        <Drawer.Screen
            name="(tabs)" 
            options={{
                drawerLabel: 'Home',
                title: 'Home',
                drawerIcon: ({ focused}) => <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={20} />,
            }}
         />

        <Drawer.Screen
            name="biodata" 
            options={{
                drawerLabel: 'BioData',
                title: 'BioData',
                drawerIcon: ({ focused}) => <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} size={20} />,
            }}
        />

        <Drawer.Screen
            name="wish" 
            options={{
                drawerLabel: 'Wish',
                title: 'Wish',
                drawerIcon: ({ focused}) => <MaterialCommunityIcons name={focused ? 'star' : 'star-outline'} size={20} />,
            }}
        />

        

        
      </Drawer>
    </GestureHandlerRootView>
  );
}
