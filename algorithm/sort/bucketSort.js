import insertionSort from './insertionSort'

function bucketSort(arr) {
  const bucketNum = 10
  const len = arr.length
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const slice = (max - min) / bucketNum
  const bucket = Array(bucketNum)

  // num to bucket
  function indexFor(i) {
    return Math.floor(i / slice)
  }

  for (let i = 0; i < bucketNum; i++) {
    bucket[i] = []
  }

  for (let i = 0; i < len; i++) {
    bucket[indexFor(arr[i])].append(arr[i])
  }

  for (let i = 0; i < bucketNum; i++) {
    insertionSort(bucket[i])
  }

  return bucket.reduce((prev, cur) => {
    prev.push(...cur)
  }, [])
}

export default bucketSort
