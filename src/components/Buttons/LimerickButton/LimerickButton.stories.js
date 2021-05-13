import React from "react";

import LimerickButton from "./LimerickButton";

export default {
  title: "Components/Buttons/Limerick Button",
  component: LimerickButton,
  argTypes: {},
};

const Template = (args) => <LimerickButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Limerick Button!",
  link: "/",
};
