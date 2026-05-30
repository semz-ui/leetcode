# 🧩 LeetCode Daily

> My daily journey through [LeetCode](https://leetcode.com/) — solving one or more problems every day, written in **TypeScript**.

![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)
![Problems Solved](https://img.shields.io/badge/Solved-0-brightgreen)
![Daily Streak](https://img.shields.io/badge/Habit-Daily-orange)

---

## 📖 About

This repository is my personal log of solving LeetCode problems on a (near) daily basis. The goals are simple:

- **Stay consistent** — build a daily problem-solving habit.
- **Sharpen fundamentals** — data structures, algorithms, and clean TypeScript.
- **Track progress** — keep a visible record of what I've solved and when.

Each solution aims to be readable first, then optimized — with notes on time/space complexity where it matters.

---

## 🗂️ Repository Structure

Solutions are organized into **daily folders** named by date (`YYYY-MM-DD`). Each day contains one or more solution files for the problem(s) solved that day.

```
leetcode/
├── README.md
├── 2026-05-30/
│   ├── 0001-two-sum.ts
│   └── 0020-valid-parentheses.ts
├── 2026-05-31/
│   └── 0121-best-time-to-buy-and-sell-stock.ts
└── ...
```

### File Naming Convention

Each solution file follows the pattern:

```
NNNN-problem-slug.ts
```

- `NNNN` — the LeetCode problem number, zero-padded to 4 digits (e.g. `0001`).
- `problem-slug` — the kebab-case problem title (matches the LeetCode URL slug).

**Example:** Problem #1 "Two Sum" → `0001-two-sum.ts`

This keeps files sortable, searchable, and easy to trace back to the original problem.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- A TypeScript runner such as [`tsx`](https://github.com/privatenumber/tsx) or [`ts-node`](https://typestrong.org/ts-node/)

### Setup

```bash
# Clone the repo
git clone <your-repo-url> leetcode
cd leetcode

# Install a TypeScript runner globally (one-time)
npm install -g tsx
```

### Running a Solution

Each file can include a quick local test at the bottom (guarded so it only runs when executed directly). To run a single solution:

```bash
tsx 2026-05-30/0001-two-sum.ts
```

> 💡 **Tip:** Export the solution function and add example calls so you can verify output locally before submitting.

### Solution Template

A typical solution file looks like this:

```typescript
// 1. Two Sum  (Easy)
// https://leetcode.com/problems/two-sum/
//
// Approach: hash map of value -> index, single pass.
// Time:  O(n)
// Space: O(n)

export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need)!, i];
    seen.set(nums[i], i);
  }
  return [];
}

// Local sanity check
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```

---

## 📊 Progress Tracker

A running log of solved problems. Newest entries on top.

**Difficulty legend:** 🟢 Easy · 🟡 Medium · 🔴 Hard

| #    | Problem | Difficulty | Topic | Date | Solution |
| ---- | ------- | ---------- | ----- | ---- | -------- |
| –    | _No problems logged yet — first one coming soon!_ | – | – | – | – |

<!--
Add a new row per solved problem using this format:

| 0001 | [Two Sum](https://leetcode.com/problems/two-sum/) | 🟢 Easy | Array, Hash Table | 2026-05-30 | [Solution](./2026-05-30/0001-two-sum.ts) |
-->

---

## 📈 Stats

| Difficulty | Solved |
| ---------- | ------ |
| 🟢 Easy    | 0      |
| 🟡 Medium  | 0      |
| 🔴 Hard    | 0      |
| **Total**  | **0**  |

---

## 🏷️ Topics Index

As the collection grows, solutions can be cross-referenced by topic/pattern:

- **Arrays & Hashing**
- **Two Pointers**
- **Sliding Window**
- **Stack**
- **Binary Search**
- **Linked List**
- **Trees**
- **Graphs**
- **Dynamic Programming**
- **Greedy**

> _Links to be added as problems in each category are solved._

---

## 📝 License

This repository is for personal learning and educational use. Feel free to browse for reference.

---

_Solving one problem at a time. Consistency over intensity. 🚀_
