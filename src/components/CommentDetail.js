import React, { Component } from 'react'
import { AvatarGenerator } from 'random-avatar-generator';
import faker from 'faker';

export class CommentDetail extends Component {

    render() {
        return (
            <div className="comment">
                <a className="avatar">
                    <img src={this.props.avatar} />
                </a>
                <div className="content">
                    <a className="author">
                        <p>{this.props.author}</p>
                    </a>
                    <div className="metadata">
                        <span className="date">{ this.props.timeAgo }</span>
                    </div>
                    <div className="text">{ this.props.text }</div>
                </div>
            </div>
        )
    }
}

export default CommentDetail
