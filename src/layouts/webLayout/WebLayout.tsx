import { Outlet } from 'react-router-dom';

export function WebLayout(): JSX.Element {
  return (
    <>
      <h2>WebLayout</h2>
      <Outlet />
    </>
  );
}
