import { View } from 'react-native';

import { HomeHeader } from '@/components/HomeHeader';

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={{ total: 'R$ 100,00' }} />
    </View>
  );
}
