import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00FF00', // Verde do Omnitrix
        tabBarInactiveTintColor: '#FFFFFF', // Branco
        tabBarStyle: {
          backgroundColor: '#000000', // Fundo preto
          borderTopColor: '#00FF00', // Borda verde
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
          title: 'Início',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="star.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Aliens',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="sparkles" color={color} />,
        }}
      />
      <Tabs.Screen
        name="omnitrix"
        options={{
          title: 'Omnitrix',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="circle.hexagongrid.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="vilões"
        options={{
          title: 'Vilões',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="bolt.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}