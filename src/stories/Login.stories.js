import LogIn from '../views/auth/LogIn.vue';

export default {
    title: 'Pages/LogIn',
    component: LogIn,
    argTypes: {
        login: { action: 'login' } // This captures the login event for the actions panel in Storybook
    }
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { LogIn },
    template: '<LogIn @login="login" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    email: '',
    password: ''
};
