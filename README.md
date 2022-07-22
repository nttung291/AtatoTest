## Atatotest

Currently includes:

- React Native
- React Navigation
- TypeScript
- Redux
- Redux-Saga
- And more!

## Quick Start

From the command line in your generated app's root directory, enter `yarn`

The AtatoTest project's structure will look similar to this:

```
atato-test-project
├── src
│   ├── assets
│   ├── components
│   ├── redux
│   ├── helpers
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── app.tsx
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── index.js
├── ios
│   ├── Atatotest
│   ├── Atatotest-tvOS
│   ├── Atatotest-tvOSTests
│   ├── Atatotest.xcodeproj
│   └── Atatotest
├── test
├── .env
└── package.json

```

**assets**
This is where your app assets will live.

**components**
This is where your React components will live. Each component will have a directory containing the `.tsx` file, along with a story file, and optionally `.presets`, and `.props` files for larger components. The app will come with some commonly used components like Button.

**navigators**
This is where your `react-navigation` navigators will live.

**navigators**
This is where your `redux` and `redux-saga` store will live.

**context**
This is where your context api will live. Each Context will have a directory containing the `.tsx` file.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**test**
This is where your app tests will live.

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**helpers**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

## Running IOS

From the command line in your generated app's root directory, enter `yarn run ios`

## Running Android

From the command line in your generated app's root directory, enter `yarn run android`

## Android *apk Build

Link: https://drive.google.com/drive/folders/1JH3WfLfKG5mLvoo_J_L5PJbQWOGLwQeG?usp=sharing
