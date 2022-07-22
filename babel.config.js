module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        "module-resolver",
        {
          root: ['.'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            // This needs to be mirrored in tsconfig.json
            "@atatotest-screens": ["./src/screens"],
            "@atatotest-components": ["./src/components"],
            "@atatotest-services": ["./src/services"],
            "@atatotest-helpers": ["./src/helpers"],
            "@atatotest-navigators": ["./src/navigators"],
            "@atatotest-theme": ["./src/theme"],
            "@atatotest-assets": ["./src/assets"],
            "@atatotest-actions": ["./src/redux/actions"],
            "@atatotest-selectors": ["./src/redux/selectors"],
          },
        },
      ],
    ],
  }
}