import React from 'react';

export default function Stopwatch(props) {
  const minute = Math.floor(props.time / 60000);
  const second = Math.floor((props.time - minute * 60000) / 1000);
  const hundrethsecond = Math.floor(
    (props.time - minute * 60000 - second * 1000) / 10
  );

  return (
    <div>
      <h3>
        {minute} : {second} : {hundrethsecond}
      </h3>
    </div>
  );
}
