import React, { Component } from 'react';
import PostData from '../data/mainpayload.json';

class PostList extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    // const artist = PostData.appData.artist; 

    return (
      <div>
          <div>
              { PostData.appData.news.map((news, index) => {
                  return (
                    <ul>
                      {/* <l1>{news.title}</l1> */}
                      <a href={news.linkurl}>{news.title}</a>
                      <div>
                        <img
                          className="news"
                          src={news.pictureurl}
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

export default PostList;