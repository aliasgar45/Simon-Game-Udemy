export default function merger<T>(
  oldData: Array<T> | undefined,
  newData: Array<T>
): Array<T> {
  return [...(oldData ? oldData : []), ...(newData ? newData : [])];
}
