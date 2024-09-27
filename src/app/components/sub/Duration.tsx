import React from 'react';

interface durationProps{
    duration: string;
}

const DurationConverter: React.FC<durationProps> = ({ duration }) => {
  const convertDuration = (isoDuration:any ) => {
    const durationRegex = /PT(?:(\d+)H)?(?:(\d+)M)?/;
    const matches = durationRegex.exec(isoDuration);
    if (!matches) return 'Invalid duration format';

    const hours = matches[1] ? parseInt(matches[1], 10) : 0;
    const minutes = matches[2] ? parseInt(matches[2], 10) : 0;

    return `${hours} hours ${minutes} minutes`;
  };

  return (
    <div>
      <p>Converted Duration: {convertDuration(duration)}</p>
    </div>
  );
};

export default DurationConverter;
