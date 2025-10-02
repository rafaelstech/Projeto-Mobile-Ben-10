import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00FF00',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: '#00FF00',
          borderTopWidth: 2,
        },
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Página de login',
          tabBarIcon: ({ color }) => <FontAwesome6 name="people-group" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Aliens',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="alien" size={24} color="white" />
        }}
      />
      <Tabs.Screen
        name="paulo"
        options={{
          title: 'Omnitrix',
          tabBarIcon: ({ color }) => <Octicons name="clock" size={24} color="white" />
        }}
      />
      <Tabs.Screen
        name="gustavo"
        options={{
          title: 'Série',
          tabBarIcon: ({ color }) => <Feather name="film" size={24} color="white" />
        }}
      />
      
    </Tabs>
  );
}