# scool-app
SCOOL project mobile app

## Setup
##### Install dependencies
```
$ npm install -g react-native-cli
$ npm install
```

##### Dependencies for running app on iOS
- Xcode for iOS development (download from Mac App Store)
- Ruby (>2.2) to run CocoaPods
- CocoaPods 1.0 or newer for iOS package management.

**Please note that CocoaPods 0.x will not work, and at the time of writing the
version in Homebrew is still 0.39, so check your pod --version and install 1.0
with gem if necessary.**

```
$ (cd ios; pod repo update; pod install)
```

##### Dependencies for running app on Android

More details here: [React Native Android Setup](https://facebook.github.io/react-native/docs/android-setup.html)

1. Install latest JDK
2. Install the Android SDK

    $ brew install android-sdk

3. Set ANDROID_HOME environment variable in .bashrc, .zshrc or similar:

    $ export ANDROID_HOME=/usr/local/opt/android-sdk

4. Start Android SDK Manager

    $ android

5. Add SDK tools via Android sdk manager

  - Android SDK tools
  - Android SDK Platform-tools
  - Android SDK Build-tools (**Important**: Rev. 23.0.1)
  - SDK Platform
  - Intel x86 Atom_64 System Image
  - Intel x86 Atom System Image
  - Android Support Repository
  - Android Support Library
  - Intel x86 Emulator Accelerator (HAXM installer)

6. Configure and install hardware acceleration

    $ open /usr/local/opt/android-sdk/extras/intel/Hardware_Accelerated_Execution_Manager/IntelHAXM_<version>.dmg

7. Open Android Virtual Device manager

    $ android avd

8. Add new virtual device

  - name: reactnative
  - Device: Nexus 5
  - Target: Android 6 - API Level 23
  - CBU: Intel Atom x86
  - check Use Host GPU

9. Launch the emulator

## Development workflow

##### Start the application in iOS simulator
```
$ react-native run-ios
```

##### Start the application in Android simulator
(If using the stock emulator, the emulator must be running)
```
$ react-native run-android
```

##### Run unit tests
```
$ npm test
```

##### Run tests every time code changes
```
$ npm run test:watch
```

##### Generate code coverage report
```
$ npm run coverage
```
