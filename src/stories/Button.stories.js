import Button from '../components/button.vue';

export default {
    title: 'Components/Button',
    component: { Button },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Button },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<Button v-bind="$props" @click="onClick" />',
    methods: {
        onClick: action('clicked'),
    },
});

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
};
export const Normal = Template.bind({});
Normal.args = {
    label: 'Button',
};
