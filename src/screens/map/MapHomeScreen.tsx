import React from 'react';
import { Button, Text, View } from 'react-native';
import useAuth from '@/hooks/queries/useAuth';

function MapHomeScreen() {
  const { logoutMutation } = useAuth();

  return (
    <View>
      <Text>Map Screen</Text>
      <Button title={'로그아웃'} onPress={() => logoutMutation.mutate(null)} />
    </View>
  );
}

export default MapHomeScreen;
