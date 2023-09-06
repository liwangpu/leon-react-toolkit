import React, { memo } from 'react';
import styles from './index.module.less';

export const SimplePage: React.FC<{ header?: React.ReactNode, children?: React.ReactNode }> = memo(({ header, children }) => {

  return (
    <div className={styles['page']}>
      {header && (
        <div className={styles['page__header']}>{header}</div>
      )}
      {children && (
        <div className={styles['page__content']}>{children}</div>
      )}
    </div>
  );
});

SimplePage.displayName = 'SimplePage';
