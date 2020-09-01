import React from 'react';

const ColoredTitle = ({text='', colors = [], ...props}) => {
  const l = colors.length;
  const styles = colors.reduce((acc, color, idx) => `
    ${acc}
    span:nth-of-type(${l}n+${idx}) {
      color: ${color};
    }`,
    '',
  );
  return (
    <div {...props}>
      {text.split('').map((c, idx) => (
        c !== ' '
          ? <span key={idx}>{c}</span>
          : <k> </k>
      ))}
      <style jsx>{styles}</style>
    </div>
  );
};

export default ColoredTitle;
