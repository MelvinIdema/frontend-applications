import Img from "./index"

export default {
    title: "Components/Img",
    component: Img
}

const Template = args => <Img {...args}/>

export const Default = Template.bind({})
Default.args = {
    src: "https://via.placeholder.com/100x100",
    alt: "Test image"
}
