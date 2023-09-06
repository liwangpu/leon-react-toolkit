import styles from './index.module.less';
import { memo } from 'react';
import { AppSidebar, IMenu } from 'leon-rc-toolkit';
import { AppstoreFilled, AppstoreOutlined, ExperimentFilled, ExperimentOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

const routes: Array<IMenu> = [
  {
    title: '首页',
    url: '/app/home',
    icon: (<AppstoreOutlined />),
    activedIcon: (<AppstoreFilled />),
  },
  {
    title: '测试',
    url: '/app/test',
    icon: (<ExperimentOutlined />),
    activedIcon: (<ExperimentFilled />),
  },
];

const App: React.FC = memo(() => {

  return (
    <div className={styles['app']}>
      <div className={styles['app__navigation']}>
        <AppSidebar title='测试' logoUrl='/assets/images/lc-logo.svg' menus={routes} />
      </div>
      <div className={styles['app__page']}>
        <Outlet />
      </div>
    </div>
  );
});

export default App;