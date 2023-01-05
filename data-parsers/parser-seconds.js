export default function parseSecondsToText(seconds) {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor((seconds % 3600) % 60);
  return `${h}h ${m}m ${s}s`;
}
