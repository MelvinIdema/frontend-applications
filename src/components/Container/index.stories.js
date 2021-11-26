import Container from "./index"

export default {
    title: 'Components/Container',
    component: Container
}

const Template = args => <Container {...args}/>

export const Default = Template.bind({})
Default.args = {
    ...Container.defaultProps,
    children: <h1>Container</h1>
}

export const Fluid = Template.bind({})
Fluid.args = {
    ...Default.args,
    fluid: true
}

export const Clickable = Template.bind({})
Clickable.args = {
    ...Default.args,
    clickable: true,
    children: <h1>Hover me</h1>
}

export const Selected = Template.bind({})
Selected.args = {
    ...Clickable.args,
    selected: true
}
