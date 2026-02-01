import type { Meta, StoryObj } from '@storybook/react';
import { InputFile } from './input-file';

const meta: Meta<typeof InputFile> = {
  title: 'UI/InputFile',
  component: InputFile,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputFile>;

export const Default: Story = {
  args: {
    maxFiles: 1,
    showPreview: true,
  },
};

export const MultipleFiles: Story = {
  args: {
    maxFiles: 5,
    showPreview: true,
  },
};

export const NoPreview: Story = {
  args: {
    maxFiles: 1,
    showPreview: false,
  },
};
