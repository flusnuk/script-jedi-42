// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/

function match(candidate, job) {
  if(!candidate.minSalary || !job.maxSalary)
    throw error
return candidate.minSalary * .9 <= job.maxSalary
}

// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8

const equityMatch = function(candidate, job) {
    return candidate.desiresEquity === false || job.equityMax > 0;
}

const locationMatch = function(candidate, job) {
    for (const location of job.locations) {
        if (candidate.desiredLocations.includes(location) || candidate.currentLocation === location) {
            return true;
        }
    }

    return false;
}

const match = function(job, candidates) {
    const matches = [];
    for (const candidate of candidates) {
        if (equityMatch(candidate, job) && locationMatch(candidate, job)) {
            matches.push(candidate);
        }
    }

    return matches;
}
