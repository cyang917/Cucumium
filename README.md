# Cucumium

## Nodejs Test Automation  Framework(Nodejs +  Cucumber + Selenium + Appium + BrowserStack)


### Local Installation
#### Requirement
- git
- node.js >= 7.6
- chrome

```bash
git clone https://github.com/cyang917/Cucumium/ 
cd <your_repo>
npm install
npm run tag @login && npm run report
```

## Reporting
Report is located in reports folder

## Cross Browser & Device Emulation Mode
```bash
# chrome, firefox, safari, etc.
export SELENIUM_BROWSER=chrome
# A valid device name in Chrome's device mode.
# E.g., Apple iPhone6, Apple iPad, Google Nexus 6, etc
export EMU_DEVICE="Apple iPhone 6"
# On Mac & Linux you can simply run
SELENIUM_BROWSER=chrome EMU_DEVICE="Apple iPhone 6" npm run tag @login
```

## Real Devices (Android Emulator, iOS Simulator and physical devices)
### Requirement
See http://appium.io/getting-started.html?lang=en for details
- Xcode, Apple Developer Tools for iOS
- Android SDK and related tools for Android


```bash
# Install appium globally and run appium
npm install -g appium
appium
# Appium server URL
export SELENIUM_REMOTE_URL=http://0.0.0.0:4723/wd/hub
# Mobile browsers: chrome, safari.
export SELENIUM_BROWSER=chrome
# Platform Name: Android, iOS
export PLATFORM_NAME=Android
# Device Name: On iOS, this should be one of the valid devices returned by instruments -s devices
# E.g.iPhone6, Nexus 6 and etc.
export DEVICE_NAME="Nexus 6"
# Only for Android Emulator
export AVD_NAME="Test"
# On Mac & Linux you can simply run:
# Adnroid
SELENIUM_BROWSER=chrome \
SELENIUM_REMOTE_URL=http://0.0.0.0:4723/wd/hub \
DEVICE_NAME='Nexus 5' \
PLATFORM_NAME=Android \
AVD_NAME=Test \
npm run tag @login
# iOS
SELENIUM_BROWSER=safari \
SELENIUM_REMOTE_URL=http://0.0.0.0:4723/wd/hub \
DEVICE_NAME='iPhone 5' \
PLATFORM_NAME=iOS \
npm run tag @login
```

## Switch test Environment
```bash
# On Mac & Linux you can simply run
ENV_URL="http://www.pwc.com" npm run tag @login
```
## BrowserStack Real Devices
```bash
SELENIUM_REMOTE_URL=http://hub-cloud.browserstack.com/wd/hub \
DEVICE_NAME='iPhone X' \
BS_USER=<browerstack username> \
BS_KEY=<browserstack key> \
npm run tag @login
```
## Tags
see [tag-expression](https://docs.cucumber.io/tag-expressions/)
tag "@a and @b"

## Wiki
see [wiki](https://github.com/HBOCodeLabs/Dotcom-Cucumium/wiki) for addtional resources
