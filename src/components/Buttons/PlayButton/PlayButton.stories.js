import React from "react";

import PlayButton from "./PlayButton";

export default {
  title: "Components/Buttons/Play Button",
  component: PlayButton,
  argTypes: {},
};

const Template = (args) => <PlayButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Play Button!",
  link: "/",
};
