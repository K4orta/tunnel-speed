export const INIT_MAP = 'INIT_MAP';
export function initMap(map) {
  return {
    type: INIT_MAP,
    map: map
  }
};
