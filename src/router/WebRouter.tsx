import { Routes, Route } from 'react-router-dom';
import { WebLayout } from '../layouts';
import { Home } from '../pages/web';

export function WebRouter() {
  return (
    <Routes>
      <Route path='/home' element={<WebLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
