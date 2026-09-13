// Simple, symmetrical, deterministic name-based "love percentage" calculator.
// This is presented honestly as an entertainment / numerology-style tool,
// NOT a scientifically validated measurement. Same two names always produce
// the same score, and the order of the names does not change the result.

function cleanName(name = "") {
  return name
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

// Classic Pythagorean-style letter values (a=1 ... i=9, then repeats)
const LETTER_VALUES = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
  s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8,
};

function nameToNumber(name) {
  const clean = cleanName(name);
  if (!clean) return 0;
  let sum = 0;
  for (const ch of clean) {
    sum += LETTER_VALUES[ch] || 0;
  }
  return sum;
}

// Reduce a number to a single digit (1-9), keeping it deterministic.
function reduceToDigit(num) {
  while (num > 9) {
    num = String(num)
      .split("")
      .reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

// Symmetrical combination so swapping Name 1 / Name 2 gives the same score.
export function calculateLovePercentage(name1, name2, dob1 = "", dob2 = "") {
  const n1 = nameToNumber(name1);
  const n2 = nameToNumber(name2);

  const sortedSum = n1 + n2;
  const sortedDiff = Math.abs(n1 - n2);

  let base = reduceToDigit(sortedSum) * 10 + reduceToDigit(sortedDiff) * 3;

  // Optional DOB layer — also symmetrical (order-independent)
  if (dob1 && dob2) {
    const d1 = dobToNumber(dob1);
    const d2 = dobToNumber(dob2);
    const dobSum = reduceToDigit(d1 + d2);
    base += dobSum * 2;
  }

  // Normalize into a believable, varied percentage range (30–99)
  let score = 30 + (base % 70);
  score = Math.min(99, Math.max(30, score));
  return score;
}

function dobToNumber(dob) {
  const digitsOnly = dob.replace(/[^0-9]/g, "");
  if (!digitsOnly) return 0;
  let sum = 0;
  for (const d of digitsOnly) sum += parseInt(d, 10);
  return sum;
}

export function getInterpretation(score) {
  if (score >= 90) {
    return {
      label: "Exceptional Match",
      text: "A very high score. This combination suggests strong natural chemistry — enjoy the fun result!",
    };
  }
  if (score >= 75) {
    return {
      label: "Strong Connection",
      text: "A high score, indicating good potential compatibility on a fun, numerology-style level.",
    };
  }
  if (score >= 55) {
    return {
      label: "Promising Match",
      text: "A balanced score — there's a fair connection here worth exploring further.",
    };
  }
  if (score >= 40) {
    return {
      label: "Mixed Signals",
      text: "A moderate score. Every relationship needs real communication, not just a number.",
    };
  }
  return {
    label: "Room to Grow",
    text: "A lower score on this fun scale — remember, real compatibility is built, not calculated.",
  };
}

// FLAMES: Friends, Lovers, Affectionate, Marriage, Enemies, Siblings
export function calculateFlames(name1, name2) {
  const a = cleanName(name1).split("");
  const b = cleanName(name2).split("");
  const bCopy = [...b];

  for (let i = a.length - 1; i >= 0; i--) {
    const idx = bCopy.indexOf(a[i]);
    if (idx !== -1) {
      a.splice(i, 1);
      bCopy.splice(idx, 1);
    }
  }

  let count = a.length + bCopy.length;
  const letters = ["F", "L", "A", "M", "E", "S"];
  let pool = [...letters];

  if (count === 0) count = 1;

  while (pool.length > 1) {
    const index = (count - 1) % pool.length;
    pool = pool.slice(index + 1).concat(pool.slice(0, index));
  }

  const results = {
    F: { label: "Friends", text: "A strong, easy friendship connection." },
    L: { label: "Love", text: "A romantic, love-based connection." },
    A: { label: "Affectionate", text: "A warm, caring, affectionate bond." },
    M: { label: "Marriage", text: "A committed, long-term style connection." },
    E: { label: "Enemies", text: "A clashing, rival-style energy — all in good fun!" },
    S: { label: "Siblings", text: "A sibling-like, protective bond." },
  };

  return { letter: pool[0], ...results[pool[0]] };
}
