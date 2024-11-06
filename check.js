const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

exports.isMsvcRuntimeInstalled = async function () {
    if (process.platform !== 'win32') return false;

    try {
        await execAsync('where vcruntime140.dll');
        console.log('Visual C++ Redistributable is installed.');
        return true;
    } catch (error) {
        console.error('Visual C++ Redistributable is not installed. Please install it from https://aka.ms/vs/16/release/vc_redist.x64.exe');
        return false;
    }
};