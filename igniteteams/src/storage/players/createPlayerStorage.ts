import AsyncStorage from '@react-native-async-storage/async-storage';

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { getPlayersByGroupStorage } from './getPlayersByGroupStorage';
import { AppError } from '../../utils/AppError';
import { PLAYER_COLLECTION } from '../storageConfig';

export async function createPlayerStorage(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const players = await getPlayersByGroupStorage(group);

    const playerAlreadyExist = players.filter((player) => player.name === newPlayer.name);

    if (playerAlreadyExist.length > 0) {
      throw new AppError('Jogador já existente no time');
    }

    const storedGroup = JSON.stringify([...players, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storedGroup);
  } catch (error) {
    throw error;
  }
}
