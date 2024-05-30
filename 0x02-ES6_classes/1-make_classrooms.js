import ClassRoom from './0-classroom';

/**
 * Initliaze a class room array
 * @return {list): 3 objects of ClassRoom
 */
export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
