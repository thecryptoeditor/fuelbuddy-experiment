import Dashboard from '@/views/Dashboard.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Views/Dashboard',
  component: Dashboard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Dashboard },
  template: '<Dashboard v-bind="$props" />',
  methods: {
    logout: action('logout'),
  },
});

export const Default = Template.bind({});
Default.args = {
  userInfo: {
    email: 'jatin@gmail.com',
    password: '123456'
  },
};
