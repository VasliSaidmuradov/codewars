// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// #1
  const reverseSeq = n => {
    const res = []
    while (n > 0) {
      res.push(n)
      n--
    }
    return res
  }

// #2
const reverseSeq = n => {
  return Array.from({ length: n }, () => n--)
}

// #3
const reverseSeq = n => {
  return new Array(n).fill(0).map((_, i) => n - i)
}