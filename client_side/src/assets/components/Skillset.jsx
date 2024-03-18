import React from 'react';

export default function Skillset(props) {
  const progress = parseInt(props.progress);

  return (
    <div className="w-20 h-20 mx-auto">
      <img src={props.imgurl} alt="" className="w-20 h-20" />
    </div>
  );
}
