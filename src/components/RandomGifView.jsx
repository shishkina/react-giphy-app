import React from 'react';


const RandomGifView = (props) => {
  return (
    <div className="gif-view">
      <iframe src={props.gif.embed_url} width="500" height="500" title="gif"></iframe>
    </div>
  )
}


export default RandomGifView;
