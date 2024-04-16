import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import Home from './Home.tsx'
import Customerinfo from './Customerinfo.tsx'
import Eshop from './Eshop.tsx'
import Login from './Login.tsx'

const { Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Sider>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">App</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/home">Home</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Switch>
              <Route path="/" element={<App />} />
              <Route path="/home" element={<Home />} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
