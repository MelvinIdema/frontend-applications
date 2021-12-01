import React from "react"
import Button, { IButtonProps } from "./index"
import type { Story, Meta } from "@storybook/react"

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { onClick: { action: 'clicked' } }
} as Meta<IButtonProps>

const Template: Story<IButtonProps> = (args) => <Button {...args}/>

export const Default = Template.bind({})
Default.args = {
    label: "A label",
    variant: 'primary'
}

export const Thumbnail = Template.bind({})
Thumbnail.args = {
    ...Default.args,
    variant: 'thumbnail'
}

export const ThumbnailWithImg = Template.bind({})
ThumbnailWithImg.args = {
    ...Thumbnail.args,
    image: 'https://images.punkapi.com/v2/73.png'
}

export const ThumbnailWithImgAndLongLabel = Template.bind({})
ThumbnailWithImgAndLongLabel.args = {
    ...ThumbnailWithImg.args,
    label: "A super long label that's going to be cut off."
}
