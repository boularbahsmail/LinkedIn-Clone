import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerTitle: "",
        headerStyle: {
          backgroundColor: colorScheme == 'dark' ? Colors?.darkGray : Colors?.white,
        },
        tabBarStyle: {
          backgroundColor: colorScheme == 'dark' ? Colors?.darkGray : Colors?.white,
          height: 65,
          paddingVertical: 8,
          paddingBottom: 10
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="home" color={color} />,
          headerRight: () => (
            <Link href="/modals/Messages" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="message-processing"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].gray}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Link href="/modals/Profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].gray}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />
      <Tabs.Screen
        name="Network"
        options={{
          title: 'My Network',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => <FontAwesome size={23} name="users" color={color} />,
          headerRight: () => (
            <Link href="/modals/Messages" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="message-processing"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].gray}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Link href="/modals/Profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].gray}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />

      <Tabs.Screen
        name="Post"
        options={{
          title: 'Post',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => <AntDesign name="plussquare" size={23} color={color} />,
          headerRight: () => (
            <Link href="/modals/Messages" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="message-processing"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].gray}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Link href="/modals/Profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].gray}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />

      <Tabs.Screen
        name="Notifications"
        options={{
          title: 'Notifications',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => <Ionicons name="ios-notifications-sharp" size={23} color={color} />,
          headerRight: () => (
            <Link href="/modals/Messages" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="message-processing"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].gray}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Link href="/modals/Profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].gray}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />

      <Tabs.Screen
        name="Jobs"
        options={{
          title: 'Jobs',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => <MaterialIcons name="wallet-travel" size={25} color={color} />,
          headerRight: () => (
            <Link href="/modals/Messages" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="message-processing"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].gray}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Link href="/modals/Profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].gray}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />
    </Tabs>
  );
}
