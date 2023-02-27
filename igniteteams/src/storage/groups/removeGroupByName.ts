import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAllGroupsStorage } from './getAllGroupsStorage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../storageConfig';

export async function removeGroupByName(groupName: string) {
  try {
    const groups = await getAllGroupsStorage();

    const filteredGroups = groups.filter((group) => group !== groupName);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);
  } catch (error) {
    throw error;
  }
}
