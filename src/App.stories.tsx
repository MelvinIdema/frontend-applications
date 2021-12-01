import React from "react"
import App from "./App"
import { Story, Meta } from "@storybook/react"

export default {
    title: "App",
    component: App,
    parameters: {
        layout: 'fullscreen'
    }
} as Meta<any>

export const Default: Story<any> = (args) => <App {...args}/>
Default.args = {

}
