const COLORS_LONGNAME = {
  'L-Taraval': 'purple',
  'N-Judah': 'blue',
  'J-Church': 'orange',
  'KT-Ingleside/Third Street': 'red',
  'M-Ocean View': 'green',
};

export const COLORS_SHORTNAME = {
  L: COLORS_LONGNAME['L-Taraval'],
  N: COLORS_LONGNAME['N-Judah'],
  J: COLORS_LONGNAME['J-Church'],
  KT: COLORS_LONGNAME['KT-Ingleside/Third Street'],
  M: COLORS_LONGNAME['M-Ocean View'],
};

export function speedColor(speed) {
  if (speed < 7) {
    return 'red';
  } else if (speed < 12) {
    return 'orange';
  }
  return 'green';
}

export default COLORS_LONGNAME;
