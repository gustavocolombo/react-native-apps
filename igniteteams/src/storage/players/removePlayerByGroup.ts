import AsyncStorage from '@react-native-async-storage/async-storage';

import { getPlayersByGroupStorage } from './getPlayersByGroupStorage';
import { PLAYER_COLLECTION } from '../storageConfig';

export async function removePlayerByGroup(name: string, group: string) {
  try {
    const players = await getPlayersByGroupStorage(group);

    const filteredPlayers = players.filter((player) => player.name !== name);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify(filteredPlayers));

    return filteredPlayers;
  } catch (error) {
    throw error;
  }
}
