import { getPlayersByGroupStorage } from './getPlayersByGroupStorage';

export async function getPlayersByGroupAndTeam(group: string, team: string) {
  try {
    const playersByGroup = await getPlayersByGroupStorage(group);

    const playersByTeam = playersByGroup.filter((player) => player.team === team);

    return playersByTeam;
  } catch (error) {
    throw error;
  }
}
