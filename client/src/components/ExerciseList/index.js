import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseList = ({ exercises, title }) => {
  if (!exercises.length) {
    return <h3>No exercises Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {exercises &&
        exercises.map(exercise => (
          <div key={exercise._id} className="card mb-3">
            <p className="card-header">
              {/* exercise.username? want a username?? */}
              <Link
                to={`/profile/${exercise.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {exercise.username}
              </Link>{' '}
              exercise on {exercise.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/exercise/${exercise._id}`}>
                <p>{exercise.exerciseName}</p>
                {/* <p className="mb-0">
                  Reactions: {exercise.reactionCount} || Click to{' '}
                  {exercise.reactionCount ? 'see' : 'start'} the discussion!
                </p> */}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ExerciseList;
