import React from "react";

const PostB = ({ prop }) => {
  // console.log(prop, "props");

  return (
    <div>
      {prop.heading}
      {prop.body}
    </div>
  );
};

export default PostB;
