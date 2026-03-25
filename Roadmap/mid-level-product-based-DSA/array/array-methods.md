# Array Methods and Core Patterns



1. Prefix Sum
2. Kadane's Algorithm

If you understand these two properly, you will be able to solve many array interview questions faster and with more confidence.

---

# 1. Prefix Sum

## What is Prefix Sum?

Prefix sum means storing the running sum of the array from left to right.

Example:

```js
arr = [2, 4, 1, 5]
prefix = [2, 6, 7, 12]
```

Meaning:

- `prefix[0] = 2`
- `prefix[1] = 2 + 4 = 6`
- `prefix[2] = 2 + 4 + 1 = 7`
- `prefix[3] = 2 + 4 + 1 + 5 = 12`

So `prefix[i]` tells us the sum of elements from index `0` to index `i`.

---

## Why do we use it?

Without prefix sum, if someone asks:

"Find sum from index 1 to index 3"

You may loop again and again for every query.

That is slow if there are many questions on the same array.

Prefix sum helps us answer range sum queries quickly.

---

## Main Formula

If `prefix[i]` stores sum from `0` to `i`, then:

```js
sum(l, r) = prefix[r] - prefix[l - 1]
```

Special case:

```js
sum(0, r) = prefix[r]
```

---

## Beginner Intuition

Suppose:

```js
arr = [3, 2, 5, 1, 4]
prefix = [3, 5, 10, 11, 15]
```

Now find sum from index `1` to `3`.

Subarray is:

```js
[2, 5, 1]
```

Actual sum is `8`.

Using prefix:

```js
prefix[3] - prefix[0] = 11 - 3 = 8
```

Why does this work?

- `prefix[3]` has sum of `[3, 2, 5, 1]`
- `prefix[0]` has sum of `[3]`
- subtract the extra left part
- remaining sum is `[2, 5, 1]`

That is the whole idea of prefix sum.

---

## How to Build Prefix Sum

```js
function buildPrefixSum(arr) {
  const prefix = new Array(arr.length);
  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}
```

---

## Range Sum Query Code

```js
function rangeSum(prefix, left, right) {
  if (left === 0) return prefix[right];
  return prefix[right] - prefix[left - 1];
}
```

Example:

```js
const arr = [3, 2, 5, 1, 4];
const prefix = buildPrefixSum(arr);

console.log(rangeSum(prefix, 1, 3)); // 8
console.log(rangeSum(prefix, 0, 4)); // 15
```

---

## Time Complexity

- Building prefix array: `O(n)`
- One range query: `O(1)`

If there are many queries, prefix sum saves a lot of time.

---

## When Should You Think of Prefix Sum?

Use prefix sum when the problem says things like:

- find sum from index `l` to `r`
- multiple range sum queries
- count subarrays with some target sum
- longest subarray with given sum
- equal number of `0`s and `1`s
- running total or cumulative sum

If the same array is used again and again, prefix sum is a strong hint.

---

## Prefix Sum with Hash Map

This is the more important interview version.

Sometimes we do not just store the prefix array.  
We store prefix sums inside a hash map.

This is useful for:

- subarray sum equals `k`
- count subarrays with sum `k`
- longest subarray with sum `k`
- equal `0`s and `1`s

### Core Idea

If current prefix sum is `currentSum`, and we want subarray sum `k`, then:

```js
currentSum - previousPrefix = k
previousPrefix = currentSum - k
```

So while scanning the array, if we have already seen `currentSum - k`, then a valid subarray exists.

---

## Example: Count Subarrays with Sum K

```js
function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (const num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}
```

### Why `map.set(0, 1)`?

It means before starting, sum `0` has appeared once.

This helps when a subarray starting from index `0` itself gives the target.

---

## Dry Run

```js
nums = [1, 2, 3]
k = 3
```

Step by step:

- start: `sum = 0`, `map = {0: 1}`, `count = 0`
- read `1`: `sum = 1`, need `1 - 3 = -2`, not found
- store `1`
- read `2`: `sum = 3`, need `3 - 3 = 0`, found once
- count becomes `1`
- store `3`
- read `3`: `sum = 6`, need `6 - 3 = 3`, found once
- count becomes `2`

Answer is `2`

Valid subarrays:

- `[1, 2]`
- `[3]`

---

## Common Mistakes in Prefix Sum

- Forgetting the special case when `left === 0`
- Using prefix sum for non-contiguous questions
- Forgetting to initialize hash map with `0 -> 1`
- Updating the map before checking answer in some counting problems
- Mixing subarray and subsequence

Remember:

- subarray = continuous
- subsequence = not necessarily continuous

Prefix sum is mainly for contiguous subarrays.

---

## Prefix Sum Questions to Practice

1. Find sum of elements from index `l` to `r`.
2. Given many queries, return range sums for each query.
3. Count subarrays with sum equal to `k`.
4. Find if any subarray has sum equal to `k`.
5. Find the longest subarray with sum equal to `k`.
6. Count the number of subarrays whose sum is divisible by `k`.
7. Find pivot index where left sum equals right sum.
8. Find longest subarray with equal number of `0`s and `1`s.
9. Count binary subarrays with given sum.
10. Find the sum of all subarrays in an array.

---

## Prefix Sum Notes You Should Remember

- Build once, answer many times.
- Best for range sum and subarray sum problems.
- Very often combined with hash map.
- Think in terms of "running sum seen so far".
- If a problem says "count subarrays" or "longest subarray with sum", prefix sum should come to mind quickly.

---

# 2. Kadane's Algorithm

## What is Kadane's Algorithm?

Kadane's Algorithm is used to find the maximum sum of a contiguous subarray.

Example:

```js
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

Answer is:

```js
6
```

Because the best subarray is:

```js
[4, -1, 2, 1]
```

And its sum is `6`.

---

## Why is it Needed?

Brute force checks all subarrays.

That takes:

- `O(n^2)` if sum is managed carefully
- `O(n^3)` in the worst naive approach

Kadane solves it in:

```js
O(n)
```

That is why it is one of the most important interview algorithms.

---

## Main Idea

At each index, ask only one question:

"Should I continue the old subarray or start a new subarray from here?"

If the previous running sum becomes harmful, drop it.

That is Kadane's full intuition.

---

## Formula

```js
currentSum = Math.max(nums[i], currentSum + nums[i]);
bestSum = Math.max(bestSum, currentSum);
```

Meaning:

- either start fresh from current element
- or extend previous subarray

Then update the best answer seen so far.

---

## Kadane's Algorithm Code

```js
function maxSubArray(nums) {
  let currentSum = nums[0];
  let bestSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    bestSum = Math.max(bestSum, currentSum);
  }

  return bestSum;
}
```

---

## Beginner Intuition

Imagine you are carrying a bag of numbers.

- If the bag helps you, keep carrying it.
- If the bag becomes too heavy and negative, throw it away and start fresh.

In Kadane:

- `currentSum` = bag you are currently carrying
- `bestSum` = best bag seen so far

---

## Dry Run

```js
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

Start:

- `currentSum = -2`
- `bestSum = -2`

Now move:

- `1`: max(`1`, `-2 + 1`) = `1`, best = `1`
- `-3`: max(`-3`, `1 - 3`) = `-2`, best = `1`
- `4`: max(`4`, `-2 + 4`) = `4`, best = `4`
- `-1`: max(`-1`, `4 - 1`) = `3`, best = `4`
- `2`: max(`2`, `3 + 2`) = `5`, best = `5`
- `1`: max(`1`, `5 + 1`) = `6`, best = `6`
- `-5`: max(`-5`, `6 - 5`) = `1`, best = `6`
- `4`: max(`4`, `1 + 4`) = `5`, best = `6`

Final answer:

```js
6
```

---

## Why Does It Work?

If `currentSum` is negative, adding it to the next number only makes the next result worse.

So there is no point in carrying a negative running sum forward.

That is the key logic behind Kadane's Algorithm.

---

## Important Edge Case

What if all numbers are negative?

Example:

```js
[-5, -2, -8]
```

Answer should be:

```js
-2
```

Not `0`.

That is why we start with:

```js
let currentSum = nums[0];
let bestSum = nums[0];
```

Do not start with `0` unless the problem clearly allows empty subarray.

---

## When Should You Think of Kadane's?

Use Kadane when the problem says:

- maximum sum subarray
- largest sum contiguous subarray
- best continuous segment
- minimum sum subarray
- circular maximum subarray

This is usually for optimization over contiguous parts of an array.

---

## Kadane for Minimum Sum

If the problem asks for minimum sum subarray, just reverse the logic:

```js
function minSubArray(nums) {
  let currentSum = nums[0];
  let bestSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.min(nums[i], currentSum + nums[i]);
    bestSum = Math.min(bestSum, currentSum);
  }

  return bestSum;
}
```

---

## Kadane with Subarray Indices

Sometimes the interviewer also asks for the actual subarray.

Then keep:

- start index of current subarray
- best start index
- best end index

```js
function maxSubArrayWithIndices(nums) {
  let currentSum = nums[0];
  let bestSum = nums[0];
  let start = 0;
  let bestStart = 0;
  let bestEnd = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      start = i;
    } else {
      currentSum = currentSum + nums[i];
    }

    if (currentSum > bestSum) {
      bestSum = currentSum;
      bestStart = start;
      bestEnd = i;
    }
  }

  return {
    bestSum,
    bestStart,
    bestEnd,
    subarray: nums.slice(bestStart, bestEnd + 1),
  };
}
```

---

## Common Mistakes in Kadane's

- Starting answer from `0` when array can contain all negative numbers
- Using Kadane for non-contiguous problems
- Forgetting that subarray must be continuous
- Confusing maximum sum with maximum product
- Not tracking indices when the question asks for the actual subarray

---

## Kadane Questions to Practice

1. Find the maximum sum of a contiguous subarray.
2. Find the minimum sum contiguous subarray.
3. Return the start and end index of the maximum sum subarray.
4. Find the maximum circular subarray sum.
5. Find the maximum sum subarray in an array with all negative numbers.
6. Find the contiguous subarray with the largest average sum.
7. Find the maximum difference between two elements where larger comes after smaller by converting to Kadane style.
8. Find the maximum sum rectangle in a 2D matrix using Kadane as helper.
9. Find the maximum absolute subarray sum.
10. Solve stock buy and sell for one transaction by transforming price differences and using Kadane idea.

---

## Prefix Sum vs Kadane

Use Prefix Sum when:

- both boundaries matter
- range sum is asked
- counting subarrays is asked
- repeated sum queries are asked

Use Kadane when:

- best possible contiguous segment is asked
- maximum or minimum subarray sum is asked
- you want one optimal continuous answer

Short difference:

- Prefix Sum answers: "What is the sum of this range?"
- Kadane answers: "Which range gives the best sum?"

---

## Final Revision Notes

- Prefix sum is about precomputing.
- Kadane is about optimizing while scanning.
- Prefix sum often uses a hash map.
- Kadane often uses `currentSum` and `bestSum`.
- Both patterns work on contiguous subarrays.
- In interviews, first identify whether the problem is asking for:
  - a known range
  - or the best range

If it is a known range, think Prefix Sum.  
If it is the best range, think Kadane.

---

## Simple Study Strategy

1. First learn the definition.
2. Then understand the intuition.
3. Then do one dry run by hand.
4. Then code the basic version.
5. Then practice the 10 related questions.
6. Then try to identify the pattern just by reading the problem statement.

If you can do that, you will be able to solve many interview questions from these concepts.
