import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from './split-button';

const meta: Meta<typeof SplitButton> = {
  title: 'UI/SplitButton',
  component: SplitButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
  args: {
    label: "Save Changes",
    onMainAction: () => alert('Main action clicked'),
    actions: [
      { label: "Save and Close", onClick: () => alert('Save and Close') },
      { label: "Save and New", onClick: () => alert('Save and New') },
      { label: "Save as Draft", onClick: () => alert('Draft saved') },
    ],
  },
};

export const Destructive: Story = {
  args: {
    label: "Delete Item",
    variant: "destructive",
    onMainAction: () => alert('Deleted'),
    actions: [
      { label: "Delete and Archive", onClick: () => alert('Archived') },
      { label: "Hard Delete", onClick: () => alert('Hard Delete') },
    ],
  },
};
