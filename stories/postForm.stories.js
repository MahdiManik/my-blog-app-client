import React from "react";
import PostForm from "./postForm/postForm";

export default {
  title: "Components/PostForm",
  component: PostForm,
};

const Template = (args) => <PostForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
