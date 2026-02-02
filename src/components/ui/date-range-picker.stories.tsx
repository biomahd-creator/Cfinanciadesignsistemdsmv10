import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from './date-range-picker';

const meta: Meta<typeof DateRangePicker> = {
  title: 'UI/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  render: () => (
    <div className="p-10">
      <DateRangePicker className="w-[300px]" />
    </div>
  ),
};
