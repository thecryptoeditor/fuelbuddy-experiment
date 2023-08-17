import Button from '@/components/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" @click="onClick" />',
  methods: {
    onClick: action('clicked'),
  },
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};
