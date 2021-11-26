import BeerThumbnail from "./index.js";

export default {
    title: "Compositions/BeerThumbnail",
    component: BeerThumbnail
}

const Template = args => <BeerThumbnail {...args}/>

export const Default = Template.bind({})
Default.args = {
    ...BeerThumbnail.defaultProps,
    title: "Grolsch Pilsner",
    image: "https://images.punkapi.com/v2/73.png"
}

export const LongName = Template.bind({})
LongName.args = {
    ...Default.args,
    title: "Black Eyed King Imp - Vietnamese Coffee Edition"
}

export const Selected = Template.bind({})
Selected.args = {
    ...Default.args,
    selected: true
}
