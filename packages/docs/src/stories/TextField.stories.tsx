import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '@nemesis-ui/react';

const meta = {
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithLabel: Story = {
  render: function Render() {
    return (
      <TextField.Wrapper>
        <TextField.Label id="story" label="E-mail" />
        <TextField id="story" />
      </TextField.Wrapper>
    );
  },
};
