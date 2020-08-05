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
                  return<h1>{results.kind}</h1>
              })}
          </div>
      </div>
    );
  }
}

export default VideoPostList;