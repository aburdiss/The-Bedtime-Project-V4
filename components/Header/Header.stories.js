import React from "react";

import Header from "./Header";

export default {
  title: "Components/Header/Header",
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
