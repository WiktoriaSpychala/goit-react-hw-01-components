import user from 'components/Profile/user.json';
import { Profile } from './Profile/profile';
import data from 'components/Statistics/data.json';
import { Statistics } from './Statistics/statistics';
import friends from 'components/FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from 'components/TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
