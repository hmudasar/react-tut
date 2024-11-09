import React from "react";
import PostB from "./PostB";

const PostA = (props) => {
  return (
    <div>
      <PostB prop={props} />
    </div>
  );
};

export default PostA;
