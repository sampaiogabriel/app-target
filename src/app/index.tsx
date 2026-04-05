import { View } from 'react-native';

import { HomeHeader } from '@/components/HomeHeader';
import { Target } from '@/components/Target';

const summary = {
  total: 'R$ 100,00',
  input: { label: 'Entradas', value: 'R$ 120,00' },
  output: { label: 'Saídas', value: 'R$ 100,00' },
};

const targets = [
  {
    id: '1',
    name: 'Comprar uma cadeira',
    percentage: '75%',
    current: '900,00',
    target: '1.200,00',
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <Target data={targets[0]} />
    </View>
  );
}
