import { SimplePage } from 'leon-rc-toolkit';
import React, { memo } from 'react';

const Page: React.FC = memo(props => {

  return (
    <SimplePage>
      Home  
    </SimplePage>
  );
});

Page.displayName = 'Page';

export default Page;