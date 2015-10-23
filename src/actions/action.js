export const ACTION = 'ACTION';
export function action(msg) {
  return {
    type: ACTION,
    msg: msg
  }
}
