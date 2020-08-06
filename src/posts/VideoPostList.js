import React, { Component } from 'react';
import VideoPostData from '../data/videosectionpayload.json';

class VideoPostList extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <div>
          <div>
              { VideoPostData.results.map((results, index) => {
                  return (
                <ul>
                    <l1>{results.snippet.title}</l1>
                    <l2>{results.snippet.description}</l2>
                </ul>
                  )
              })}
          </div>
      </div>
    );
  }
}

export default VideoPostList;