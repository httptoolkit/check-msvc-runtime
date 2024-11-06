# Check-MSVC-Runtime

> _Part of [HTTP Toolkit](https://httptoolkit.com/): powerful tools for building, testing & debugging HTTP_

An npm package to easily show a warning if the Microsoft Visual C++ (MSVC) Redistributable is not installed on Windows.

Many Windows binaries won't run without the MSVC runtime installed, so this can cause problems, but those applications often don't provide a clear error. This makes it easy to end up with a hard-to-set up npm project. To handle that, this package makes it easy to cleanly detect and warn whenever this happens, so developers can easily resolve it themselves.

To use this:

* `npm install check-msvc-runtime`
* Add `"preinstall": "check-msvc-runtime"` to your package.json scripts

Now, any time you `npm install` in your repo on Windows, if the MSVC runtime isn't installed it'll fail and show:

```bash
> check-msvc-runtime@0.0.0 preinstall
> ./bin.js

***********************
The Microsoft Visual C++ Runtime is not installed, and is required to set up this project on Windows.
Install it from https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
***********************

npm ERR! code 1
npm ERR! path .../check-msvc-runtime
npm ERR! command failed
```
