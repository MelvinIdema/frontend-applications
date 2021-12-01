import React from "react";
import Container, { IContainerProps } from "./index"
import type { Story, Meta } from "@storybook/react"

export default {
    title: 'Components/Container',
    component: Container
} as Meta<IContainerProps>

const Template: Story<IContainerProps> = (args) => <Container {...args}/>

export const Default = Template.bind({})
Default.args = {
    children: <h1>Container</h1>
}

export const Fluid = Template.bind({})
Fluid.args = {
    ...Default.args,
    fluid: true
}
