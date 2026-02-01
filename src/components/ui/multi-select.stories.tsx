import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from './multi-select';
import React from 'react';

const meta: Meta<typeof MultiSelect> = {
  title: 'UI/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const frameworks = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string[]>([]);
    
    return (
      <div className="w-[400px] p-10">
        <MultiSelect
          options={frameworks}
          selected={selected}
          onChange={setSelected}
          placeholder="Select frameworks..."
        />
      </div>
    );
  },
};
