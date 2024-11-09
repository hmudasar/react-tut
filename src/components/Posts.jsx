import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PostA from "./PostA";
import CounterB from "./CounterB";

const url = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // axios
    const res = await axios.get(url);
    setPostData(res?.data);
  };
  // console.log(postData, "postData");

  return (
    <div className="post-container">
      <Container>
        <div className="text-center mb-3">
          <h2>Post</h2>
        </div>
        <Row>
          {postData.slice(10, 20).map((post) => (
            <Col lg={4} md={3} sm={2} key={post?.id}>
              <div className="card">
                <div className="card-body">
                  <div className="card-image">
                    <img src="/default.svg" />
                  </div>
                  <CounterB />
                  <PostA
                    body={<p className="card-text">{post?.body}</p>}
                    heading={<h5 className="card-title">{post?.title}</h5>}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
