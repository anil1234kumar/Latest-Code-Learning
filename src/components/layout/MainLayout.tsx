import { Layout, Menu, Switch, theme } from 'antd';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTheme } from '@/store/features/ui/uiSlice';

const { Header, Content, Footer } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.ui.theme);
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                label: <Link to="/">Home</Link>,
              },
              {
                key: '2',
                label: <Link to="/about">About</Link>,
              },
            ]}
          />
        </div>
        <Switch
          checked={currentTheme === 'dark'}
          onChange={() => dispatch(toggleTheme())}
          checkedChildren="🌙"
          unCheckedChildren="☀️"
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            margin: '16px 0',
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        React App ©{new Date().getFullYear()} Created with Ant Design
      </Footer>
    </Layout>
  );
}