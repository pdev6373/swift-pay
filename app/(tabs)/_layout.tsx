import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
  Activity,
  ActivityActive,
  Explore,
  ExploreActive,
  Home,
  HomeActive,
  Profile,
  ProfileActive,
} from '@/assets/images/svgs';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeActive style={{ color: '#A0E86F' }} />
            ) : (
              <Home style={{ color: '#9E9E9E' }} />
            ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ExploreActive style={{ color: '#A0E86F' }} />
            ) : (
              <Explore style={{ color: '#9E9E9E' }} />
            ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: 'Contacts',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ActivityActive style={{ color: '#A0E86F' }} />
            ) : (
              <Activity style={{ color: '#9E9E9E' }} />
            ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: 'Insights',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ActivityActive style={{ color: '#A0E86F' }} />
            ) : (
              <Activity style={{ color: '#9E9E9E' }} />
            ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ProfileActive style={{ color: '#A0E86F' }} />
            ) : (
              <Profile style={{ color: '#9E9E9E' }} />
            ),
        }}
      />
    </Tabs>
  );
}
