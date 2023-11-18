import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from '../layouts';
import { User, Blog } from '../pages/admin';

export function AdminRouter() {
  return (
    <Routes>
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='users' element={<User />} />
        <Route path='blog' element={<Blog />} />
      </Route>
    </Routes>
  );
}
