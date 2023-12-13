const path = require('path');

module.exports = function (api) {
  const envPath = path.resolve(__dirname, `../../`, `.env`);
  require('dotenv').config({ path: envPath });
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      require.resolve('expo-router/babel'),
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '../../.env',
          allowlist: ['NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'],
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['../..'],
          // alias: {
          //   // define aliases to shorten the import paths
          //   app: "../../packages/app",
          //   '@my/ui': '../../packages/ui',
          // },
          alias: {
            '@utilities': ['../../packages/utilities/src'],
            '@theme': ['../..packages/ui/src/theme'],
            '@native': ['../../apps/mobile'],
            '@web': ['../../apps/web'],
          },
          extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js', '.ts'],
        },
      ],
      [
        'transform-inline-environment-variables',
        {
          include: 'TAMAGUI_TARGET',
        },
      ],
      // [
      //   "@tamagui/babel-plugin",
      //   {
      //     components: ["tamagui"],
      //     config: "./tamagui.config.ts",
      //     logTimings: true
      //   }
      // ],
      ...(process.env.EAS_BUILD_PLATFORM === 'android'
        ? []
        : [
            [
              '@tamagui/babel-plugin',
              {
                //components: ['@my/ui', 'tamagui'],
                components: ['tamagui'],
                config: './tamagui.config.ts',
              },
            ],
          ]),
      'react-native-reanimated/plugin',
    ],
  };
};
