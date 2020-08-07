import React, { Component } from 'react';
import MusicPostData from '../data/musicsectionpayload.json';

class MusicPostList extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <div>
          <div>
              { MusicPostData.items.map((items, index) => {
                  return (
                    <ul>
                      {/* <l1>{news.title}</l1> */}
                      <a href={items.external_urls.spotify}>
                        {items.name}
                      </a>
                      <div>
                        <img
                          src={items.images.url}
                          style={{ width: 100 }}
                        />
                      </div>
                    </ul>
                  );
              })}
          </div>
      </div>
    );
  }
}

export default MusicPostList;