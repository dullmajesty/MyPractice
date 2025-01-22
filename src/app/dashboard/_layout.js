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
                drawerLabel: 'Profile',
                title: 'Dashboard',
                drawerIcon: ({ focused}) => <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} size={20} />,
            }}
         />

        <Drawer.Screen
            name="instruction" 
            options={{
                drawerLabel: 'Instruction',
                title: 'Instruction',
                drawerIcon: ({ focused}) => <MaterialCommunityIcons name={focused ? 'book' : 'book-outline'} size={20} />,
            }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
