import styles from './index.module.less';
import { memo, useMemo } from 'react';
import { SimpleNavsPage, INavItem } from 'eon-rc-widget';

const App: React.FC = memo(() => {

  const routes = useMemo<Array<INavItem>>(() => ([
    {
      title: '首页',
      path: '/app/home',
    },
  ]), []);

  return (
    <div className={styles['app']}>
      <SimpleNavsPage title='动态表单测试' routes={routes} />
    </div>
  );
});

export default App;