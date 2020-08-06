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
                      {/* <l1>{news.title}</l1> */}
                      <a href={results.snippet.title}>
                        {results.snippet.title}</a>
                      <img src={results.snippet.thumbnails.default.url} style={{ width: 100 }} />
                    </ul>
                  )
              })}
          </div>
      </div>
    );
  }
}

export default VideoPostList;