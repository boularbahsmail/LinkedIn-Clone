import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
