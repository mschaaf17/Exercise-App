import React from 'react';
import ExerciseList from '../components/ExerciseList';
import ExerciseForm from '../components/ExerciseForm';
// import FriendList from '../components/FriendList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_EXERCISES, QUERY_ME} from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_EXERCISES);
  const { data: userData } = useQuery(QUERY_ME);
  const exercises = data?.exercises || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ExerciseForm />
            Hey you are logged in!
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ExerciseList
              exercises={exercises}
              title="Some Feed for Exercise(s)..."
            />
          )}
          next div
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            {/* <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            /> */}
            next div again!
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
