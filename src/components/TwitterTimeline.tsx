// # TwitterTimeline.tsx
import React, { useEffect } from 'react';

const TwitterTimeline = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className='dark:hidden'>
        <a className="twitter-timeline w-8/12" href="https://twitter.com/ryudaimusical?ref_src=twsrc%5Etfw">Tweets by ryudaimusical</a>
      </div>
      <div className='hidden dark:block'>
        <a className="twitter-timeline w-8/12" data-theme="dark" href="https://twitter.com/ryudaimusical?ref_src=twsrc%5Etfw">Tweets by ryudaimusical</a>
      </div>
    </div>
  //  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  );
};

export default TwitterTimeline;