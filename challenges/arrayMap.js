const hasSubarrayWithSum = (arr, target) => {
  const cumulativeSumMap = new Map();
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum === target) return true;

    if (cumulativeSumMap.has(currentSum - target)) return true;

    cumulativeSumMap.set(
      currentSum,
      (cumulativeSumMap.get(currentSum) || 0) + 1
    );
  }

  return false;
};
