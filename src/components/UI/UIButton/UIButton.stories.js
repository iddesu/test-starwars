import UIButton from "./UIButton";

export default {
    title: 'UI-Kit/UI-Button',
    component: UIButton
}

const Template = (args) => <UIButton {...args} />

const props = {
    text: 'Button',
    onclick: () => {},
    disabled: false,
    theme: 'light',
    classes: ''
}

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light'
}

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark'
}

export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true
}