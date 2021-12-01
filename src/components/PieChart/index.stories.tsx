import React from "react"
import PieChart from "./index"
import type { Story, Meta } from "@storybook/react"

export default {
    title: "Components/PieChart",
    component: PieChart
} as Meta<any>

const Template: Story<any> = args => <PieChart {...args}/>

export const Default = Template.bind({})
Default.args = {
    data: [ { "name": "Cascade", "amount": 25, "attribute": "bitter" }, { "name": "Cascade", "amount": 18.8, "attribute": "flavour" }, { "name": "Centennial", "amount": 18.8, "attribute": "flavour" }, { "name": "Amarillo", "amount": 25, "attribute": "flavour" }, { "name": "Simcoe", "amount": 31.3, "attribute": "flavour" } ],
    html: (d: any) => `<strong>${d.data.amount}g</strong> <br> ${d.data.name}`,
    colorScaleValue: ['#FFE194', '#FBA633'],
    width: 200,
    height: 200
}
