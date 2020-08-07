import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export default class Button extends Component {
    constructor() {
        super();
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            loggedIn: token ? true : false,
            nowPlaying: {
                name: 'Not Checked',
                albumArt: ''
            }
        }
    }
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    getNowPlaying() {
        spotifyApi.getMyCurrentPlaybackState()
            .then((response) => {
                this.setState({
                    nowPlaying: {
                        name: response.item.name,
                        albumArt: response.item.album.images[0].url
                    }
                });
            })
    }
    render() {
        return (
            <div>
                <a href='http://localhost:8888'>
                    <button>Login With Spotify</button>
                </a>
                <div> Now Playing: {this.state.nowPlaying.name} </div>
                <div>
                    <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
                </div>
                {
                    this.state.loggedIn &&
                    <button onClick={() => this.getNowPlaying()}>
                        Check Now Playing
        </button>
                }
            </div>
        );
    }
}




