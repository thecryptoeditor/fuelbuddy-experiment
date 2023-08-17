import Login from '@/views/Login.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Views/Login',
  component: Login,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Login },
  template: '<Login v-bind="$props" />',
  methods: {
    login: action('login'),
  },
});

export const Default = Template.bind({});
Default.args = {
  email: '',
  password: '',
};
