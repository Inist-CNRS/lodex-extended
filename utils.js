const fs = require('fs');

const isNotRunQuery = str => !str.includes('[LodexRunQuery]');
const isNotFilterVersions = str => !str.includes('[filterVersions]');
const isNotFilterContributions = str => !str.includes('[filterContributions]');

/**
 * Remove [LodexRunQuery], [filterVersions], and [filterContributions] from the
 * given script file, and return the script string.
 *
 * @param {string} scriptPath Absolute path to the ezs script.
 * @returns {string} the script string, without lodex query and filters
 */
function removeQueryAndFilters(scriptPath) {
    return fs.readFileSync(scriptPath, { encoding: 'utf8' })
        .split('\n')
        .filter(isNotRunQuery)
        .filter(isNotFilterVersions)
        .filter(isNotFilterContributions)
        .join('\n');
}

module.exports = {
    removeQueryAndFilters,
}
