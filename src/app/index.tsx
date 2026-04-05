import { View } from 'react-native';

import { HomeHeader } from '@/components/HomeHeader';
import { List } from '@/components/List';
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
  {
    id: '2',
    name: 'Comprar um apple watch',
    percentage: '45%',
    current: '900,00',
    target: '2.200,00',
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Target data={item} />}
        emptyMessage="Nenhuma meta. Toque em uma nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}
