function finiteInteger(value, fallback) {
  return Number.isFinite(value) ? Math.round(value) : fallback;
}

export function clampRhythmInputs(steps, pulses, rotation) {
  const safeSteps = Math.min(16, Math.max(4, finiteInteger(steps, 8)));
  const safePulses = Math.min(safeSteps, Math.max(1, finiteInteger(pulses, 3)));
  const rawRotation = finiteInteger(rotation, 0);
  const safeRotation = ((rawRotation % safeSteps) + safeSteps) % safeSteps;

  return {
    steps: safeSteps,
    pulses: safePulses,
    rotation: safeRotation
  };
}

export function buildEuclideanPattern(steps, pulses, rotation = 0) {
  const safe = clampRhythmInputs(steps, pulses, rotation);
  if (safe.pulses === safe.steps) {
    return Array.from({ length: safe.steps }, () => 1);
  }

  const counts = [];
  const remainders = [safe.pulses];
  let divisor = safe.steps - safe.pulses;
  let level = 0;

  while (remainders[level] > 1) {
    counts[level] = Math.floor(divisor / remainders[level]);
    remainders[level + 1] = divisor % remainders[level];
    divisor = remainders[level];
    level += 1;
  }
  counts[level] = divisor;

  const unrotated = [];
  const build = (currentLevel) => {
    if (currentLevel === -1) {
      unrotated.push(0);
      return;
    }
    if (currentLevel === -2) {
      unrotated.push(1);
      return;
    }
    for (let index = 0; index < counts[currentLevel]; index += 1) {
      build(currentLevel - 1);
    }
    if (remainders[currentLevel] !== 0) {
      build(currentLevel - 2);
    }
  };
  build(level);

  const firstPulse = unrotated.indexOf(1);
  const pattern = [...unrotated.slice(firstPulse), ...unrotated.slice(0, firstPulse)];

  if (safe.rotation === 0) {
    return pattern;
  }

  return [...pattern.slice(-safe.rotation), ...pattern.slice(0, -safe.rotation)];
}

export function patternToPython(pattern) {
  return `pattern = [${pattern.join(', ')}]`;
}

export function buildPythonLessonSource() {
  return `def euclidean_rhythm(steps, pulses, rotation=0):
    steps = max(4, min(16, round(steps)))
    pulses = max(1, min(steps, round(pulses)))
    rotation = rotation % steps

    if pulses == steps:
        pattern = [1] * steps
    else:
        counts, remainders = [], [pulses]
        divisor = steps - pulses

        while remainders[-1] > 1:
            counts.append(divisor // remainders[-1])
            remainders.append(divisor % remainders[-1])
            divisor = remainders[-2]
        counts.append(divisor)

        pattern = []
        def build(level):
            if level == -1:
                pattern.append(0)
            elif level == -2:
                pattern.append(1)
            else:
                for _ in range(counts[level]):
                    build(level - 1)
                if remainders[level] != 0:
                    build(level - 2)

        build(len(counts) - 1)
        first_beat = pattern.index(1)
        pattern = pattern[first_beat:] + pattern[:first_beat]

    return [
        pattern[(index - rotation) % len(pattern)]
        for index in range(len(pattern))
    ]`;
}

export function comparePrediction(prediction, actual) {
  const total = actual.length;
  const answered = prediction.slice(0, total).filter((value) => value !== null).length;
  const correct = actual.reduce(
    (score, value, index) => score + (prediction[index] === value ? 1 : 0),
    0
  );

  return {
    correct,
    total,
    answered,
    complete: answered === total
  };
}
