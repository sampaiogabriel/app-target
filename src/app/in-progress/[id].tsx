import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import { PageHeader } from '@/components/PageHeader';
import { Progress } from '@/components/Progress';

const details = {
  current: 'R$ 580,00',
  target: 'R$ 1000,00',
  percentage: 24,
};

export default function InProgress() {
  return (
    <View style={{ flex: 1 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{ icon: 'edit', onPress: () => '' }}
      />

      <Progress data={details} />
    </View>
  );
}
