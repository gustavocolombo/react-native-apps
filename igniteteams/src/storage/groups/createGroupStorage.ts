import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAllGroupsStorage } from './getAllGroupsStorage';
import { AppError } from '../../utils/AppError';
import { GROUP_COLLECTION } from '../storageConfig';

export async function createGroupStorage(newGroupName: string) {
  try {
    const storedGroups = await getAllGroupsStorage();

    const verifyNameGroup = storedGroups.includes(newGroupName);

    if (verifyNameGroup) {
      throw new AppError('Já existe uma turma cadastrada com esse nome, tente outro');
    }

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...storedGroups, newGroupName]));
  } catch (error) {
    throw error;
  }
}
