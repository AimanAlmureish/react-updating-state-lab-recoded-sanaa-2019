// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitrating = () => {
        this.setState({
            settings: {
                ...this.state.settings, bitrate: 12
            }
        })
    }

    resoluting = () => {
        this.setState({
            settings: {
                ...this.state.settings, video: {
                    ...this.state.video, resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.bitrating} className="bitrate">{this.state.bitrate}</button>
                <button onClick={this.resoluting} className="resolution">{this.state.resolution}</button>
            </div>
        )
    }
}
