export default function makeId() {
  let ID = '';
  const ID_LENGTH = 16;
  const ID_CHARS_LENGTH = 36;

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let i = 0; i < ID_LENGTH; i += 1) {
    ID += characters.charAt(Math.floor(Math.random() * ID_CHARS_LENGTH));
  }
  return ID;
}