import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

import {
  buildEuclideanPattern,
  buildPythonLessonSource,
  clampRhythmInputs,
  comparePrediction,
  patternToPython
} from '../src/lib/euclidean-rhythm.mjs';

test('spaces three pulses across eight steps', () => {
  assert.deepEqual(buildEuclideanPattern(8, 3, 0), [1, 0, 0, 1, 0, 0, 1, 0]);
});

test('keeps the requested pulse count for a dense rhythm', () => {
  const pattern = buildEuclideanPattern(8, 5, 0);

  assert.deepEqual(pattern, [1, 0, 1, 1, 0, 1, 1, 0]);
  assert.equal(pattern.reduce((total, value) => total + value, 0), 5);
});

test('rotates a pattern to the right without changing its structure', () => {
  assert.deepEqual(buildEuclideanPattern(8, 3, 2), [1, 0, 1, 0, 0, 1, 0, 0]);
});

test('normalizes lesson inputs to safe bounds', () => {
  assert.deepEqual(clampRhythmInputs(2, 9, -1), {
    steps: 4,
    pulses: 4,
    rotation: 3
  });
  assert.deepEqual(clampRhythmInputs(20, 0, 18), {
    steps: 16,
    pulses: 1,
    rotation: 2
  });
});

test('formats a pattern as a copyable Python list', () => {
  assert.equal(patternToPython([1, 0, 1, 0]), 'pattern = [1, 0, 1, 0]');
});

test('scores both incomplete and complete predictions', () => {
  assert.deepEqual(comparePrediction([1, null, 0], [1, 0, 1]), {
    correct: 1,
    total: 3,
    answered: 2,
    complete: false
  });
  assert.deepEqual(comparePrediction([1, 0, 0], [1, 0, 1]), {
    correct: 2,
    total: 3,
    answered: 3,
    complete: true
  });
});

test('emits runnable Python that preserves rotation behavior', () => {
  const program = `${buildPythonLessonSource()}\nimport json\nprint(json.dumps(euclidean_rhythm(8, 3, 2)))`;
  const result = spawnSync('python3', ['-c', program], { encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), [1, 0, 1, 0, 0, 1, 0, 0]);
});
