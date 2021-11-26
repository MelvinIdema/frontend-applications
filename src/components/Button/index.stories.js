import Button from "./index.js";

export default {
    title: "Components/button",
    component: Button
}

const Template = args => <Button {...args}/>

export const Default = Template.bind({})
Default.args = {
    children: "A label"
}
