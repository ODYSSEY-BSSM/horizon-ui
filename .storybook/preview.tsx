import { Global } from '@emotion/react';

import { global } from '@tokens';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <>
        <Global styles={global} />
        <Story />
      </>
    ),
  ],
};

export default preview;
