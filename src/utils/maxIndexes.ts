export const maxIndexes = (array: number[]) => {
  const maxNum = Math.max(...array)

  return array
    .map((item, index) => {
      if (item === maxNum) {
        return index
      } else {
        return -1
      }
    })
    .filter((item) => item !== -1)
}