import React from "react"
import ButtonRow, { IButtonRowProps } from "./index"
import type { Story, Meta } from "@storybook/react"

export default {
    title: "Compositions/ButtonRow",
    component: ButtonRow
} as Meta<any>

const Template: Story<IButtonRowProps> = (args) => <ButtonRow {...args}/>

export const Default = Template.bind({});
Default.args = {
    data: [
        {
            "id":1,
            "name":"Buzz",
            "image_url":"https://images.punkapi.com/v2/keg.png",
        },
        {
            "id":2,
            "name":"Trashy Blonde",
            "image_url":"https://images.punkapi.com/v2/2.png",
        },
        {
            "id":3,
            "name":"Berliner Weisse With Yuzu - B-Sides",
            "image_url":"https://images.punkapi.com/v2/keg.png",
        },
        {
            "id":4,
            "name":"Pilsen Lager",
            "image_url":"https://images.punkapi.com/v2/4.png",
        },
        {
            "id":6,
            "name":"Electric India",
            "image_url":"https://images.punkapi.com/v2/6.png",
        },
        {
            "id":7,
            "name":"AB:12",
            "image_url":"https://images.punkapi.com/v2/7.png",
        },
        {
            "id":8,
            "name":"Fake Lager",
            "image_url":"https://images.punkapi.com/v2/8.png",
        },
        {
            "id":9,
            "name":"AB:07",
            "image_url":"https://images.punkapi.com/v2/9.png",
        },
        {
            "id":10,
            "name":"Bramling X",
            "image_url":"https://images.punkapi.com/v2/10.png",
        }
    ]
}

