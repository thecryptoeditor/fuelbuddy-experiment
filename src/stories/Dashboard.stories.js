import Dashboard from '../views/visuals/Dashboard.vue';

export default {
    title: 'Pages/Dashboard',
    component: Dashboard,
    argTypes: {
        logout: { action: 'logout' }
    }
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Dashboard },
    template: '<Dashboard @logout="logout" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    userInfo: {
        email: 'example@example.com',
    }
};
