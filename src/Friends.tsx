import { useState } from 'react';
import { Feed, Header, Icon } from 'semantic-ui-react';

interface Friend {
  id: number;
  firstName: string;
  lastName: string;
  whenAdded: string;
  avatar: string;
}

// Highlight the difference between state initialization using function name and using function execution
function Friends() {
  const [friendsCounts, setFriendsCounts] = useState<number>(0);

  // See the difference between "getFriends" and getFriends():
  // - "getFriends" is used in this useState as it only gets called once during initialization
  // - "getFriends()" is NOT used because it will get called repeatedly and everytime we change "friends" state
  const [friends] = useState<Friend[]>(getFriends);

  return (
    <>
      <Header size='medium' floated='left'>Friends</Header>
      <Feed size='large'>
        {
          friends.map(friend =>
            <Feed.Event key={friend?.id}>
              <Feed.Label image={`/images/avatar/small/${friend?.avatar}.jpg`} />
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>{`${friend.firstName} ${friend?.lastName}`}</Feed.User> added you as a friend
                  <Feed.Date>{friend.whenAdded}</Feed.Date>
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          )
        }

        <Feed.Event>
          <Feed.Content>           
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' color='red' />Friends array called {friendsCounts} times.
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </>

  );

  function getFriends(): Friend[] {
    const friends = [
      {
        id: 1,
        firstName: "Elliot",
        lastName: "Adeniyi",
        whenAdded: "1 hour ago",
        avatar: "elliot"
      },
      {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        whenAdded: "2 days ago",
        avatar: "john"
      },
      {
        id: 3,
        firstName: "Jenny",
        lastName: "Fu",
        whenAdded: "4 days ago",
        avatar: "jenny"
      }
    ];

    setFriendsCounts(f => friendsCounts + 1);
    return friends;
  }
}

export default Friends;
