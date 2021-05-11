import React from "react";

import HeaderButton from "./HeaderButton";

export default {
  title: "Components/Header/Header Button",
  component: HeaderButton,
  argTypes: {},
};

const Template = (args) => <HeaderButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Header Button!",
  link: "/",
};
