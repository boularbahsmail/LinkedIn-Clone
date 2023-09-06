import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function Network() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Network</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
});
