export const randomElements = (array: any[], num: number) => {
  const copy = array.slice()
  return [...Array(num)].map(() => copy.splice(Math.floor(Math.random() * copy.length), 1)[0])
}