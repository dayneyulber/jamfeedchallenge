import React, { Component } from 'react';
import PostData from '../data/mainpayload.json';

class PostList extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    const artist = PostData.appData.artist; 

    return (
      <div>
          {Object.keys(artist).map(key => {
            return (<p>{artist[key]}</p>
                )
          })}
      </div>
    );
  }
}

export default PostList;