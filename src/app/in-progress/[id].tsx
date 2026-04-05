import { router, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { List } from '@/components/List';
import { PageHeader } from '@/components/PageHeader';
import { Progress } from '@/components/Progress';
import { Transaction } from '@/components/Transaction';

const details = {
  current: 'R$ 580,00',
  target: 'R$ 1000,00',
  percentage: 24,
};

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{ icon: 'edit', onPress: () => '' }}
      />

      <Progress data={details} />

      <List
        title="Transações"
        data={[]}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => ''} />
        )}
        emptyMessage="Nenhuma transação. Toque em uma nova transação para guardar seu primeiro dinheiro."
      />

      <Button
        title="Nova transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  );
}
