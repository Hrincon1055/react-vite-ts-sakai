import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutProvider } from './context/layoutcontext';
import { AdminLayout, WebLayout } from './layouts';
import { Home } from './pages/web';
import { Blog, User } from './pages/admin';

function App() {
  return (
    <LayoutProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WebLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<User />} />
            <Route path='blog' element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LayoutProvider>
  );
}

export default App;
