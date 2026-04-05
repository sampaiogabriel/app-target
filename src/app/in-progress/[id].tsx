import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function InProgress() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>In Progress</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
