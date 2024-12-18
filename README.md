# Expo Vector Icons: Custom Icon Font Loading Issue

This repository demonstrates a bug and its solution related to loading custom icon fonts with Expo's `@expo/vector-icons` package.  The bug manifests as missing icons when using a custom icon font.

## Bug Description
When integrating a custom icon font into a React Native app using Expo, the icons fail to render. This is likely due to issues with properly configuring and including the font files in the project.

## How to Reproduce
1. Clone this repository.
2. Follow the setup instructions in `bug.js` to see the error.
3. Refer to `bugSolution.js` for the corrected implementation.

## Solution
The solution addresses the missing font file loading by ensuring proper inclusion in the project and correct usage within the `@expo/vector-icons` component. This involves verifying the font files' presence in the assets folder, correctly referencing the font family name, and ensuring the appropriate configuration in the Expo project.