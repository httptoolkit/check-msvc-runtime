#!/usr/bin/env node

const { isMsvcRuntimeInstalled } = require('./check');

isMsvcRuntimeInstalled().then((installed) => {
    if (process.platform !== 'win32') {
        // We only check on Windows - not relevant elsewhere
        process.exit(0);
    }

    if (installed) {
        console.log('Visual C++ Redistributable is installed.');
        process.exit(0);
    } else {
        console.error(
            '***********************\n' +
            'The Microsoft Visual C++ Runtime is not installed, and is\n' +
            'required to set up this project on Windows.\n\n' +
            'Install it from:\n' +
            'https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist\n' +
            '***********************\n'
        );
        process.exit(1);
    }
});