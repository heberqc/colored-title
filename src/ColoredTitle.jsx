import React from 'react';

const ColoredTitle = ({text='', colors = [], ...props}) => {
  const l = colors.length;
  return (
    <div {...props}>
      {text.split('').map((c, idx) => (
        c !== ' '
          ? <span key={idx}>{c}</span>
          : <k> </k>
      ))}
      <style jsx>{
        colors.reduce((acc, color, idx) => `
          ${acc}
          span:nth-of-type(${l}n+${idx}) {
            color: ${color};
          }`,
          '',
        )
      }</style>
    </div>
  );
};

export default ColoredTitle;
