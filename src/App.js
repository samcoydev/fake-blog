import React, { Component } from 'react';
import { AvatarGenerator } from 'random-avatar-generator';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import LoginCard from './components/LoginCard';

class App extends Component {
  render() {
    const avatarGenerator = new AvatarGenerator();

    return (
      <div>
        <LoginCard />
        <div className="ui container comments">
          <CommentDetail 
            author={ faker.fake("{{name.firstName}} {{name.lastName}}") } 
            avatar={ avatarGenerator.generateRandomAvatar() }
            timeAgo={ faker.date.recent().toDateString() }
            text={ faker.lorem.sentence() }
          />
          
        </div>
      </div>
    );
  }
}

export default App;
