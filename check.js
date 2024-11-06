const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

exports.isMsvcRuntimeInstalled = async function () {
    if (process.platform !== 'win32') return false;

    try {
        await execAsync('where vcruntime140.dll');
        return true;
    } catch (error) {
        return false;
    }
};