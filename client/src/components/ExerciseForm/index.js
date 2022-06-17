import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_EXERCISE } from '../../utils/mutations';
import { QUERY_EXERCISES, QUERY_ME } from '../../utils/queries';

const ExerciseForm = () => {
  const [exerciseName, setText] = useState('');
  const [weight, setWeight] = useState('')
  const [characterCount, setCharacterCount] = useState(0);

  const [addExercise, { error }] = useMutation(ADD_EXERCISE, {
    update(cache, { data: { addExercise } }) {
      
        // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, exercises: [...me.exercises, addExercise] } },
        });
      } catch (e) {
        console.warn("First exercise logged by user!")
      }

      // update exercise array's cache
      const { exercises } = cache.readQuery({ query: QUERY_EXERCISES });
      cache.writeQuery({
        query: QUERY_EXERCISES,
        data: { exercises: [addExercise, ...exercises] },
      });
    }
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      // making both change! check this out in other react activies from class 
      setWeight(event.target.value)
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addExercise({
        variables: { exerciseName, weight },
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new exercise..."
          value={exerciseName}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <input placeholder="weight" value={weight} onChange={handleChange}/>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExerciseForm;
