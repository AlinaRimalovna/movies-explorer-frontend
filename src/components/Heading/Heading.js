import React from 'react';

function Heading({ name }) {
  return (
    <div className="heading">
      <h1 className="heading__title">{name}</h1>
    </div>
  );
}

export default Heading;