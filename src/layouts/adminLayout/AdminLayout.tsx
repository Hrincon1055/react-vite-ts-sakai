import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { classNames } from 'primereact/utils';
import { LayoutContext } from '../../context/layoutcontext';
import { Header, Footer } from '../../shared';

export function AdminLayout(): JSX.Element {
  const { layoutConfig, layoutState } = useContext(LayoutContext);
  const user = { username: 'henry' };

  const containerClass = classNames('layout-wrapper', {
    'layout-overlay': layoutConfig.menuMode === 'overlay',
    'layout-static': layoutConfig.menuMode === 'static',
    'layout-static-inactive':
      layoutState.staticMenuDesktopInactive &&
      layoutConfig.menuMode === 'static',
    'layout-overlay-active': layoutState.overlayMenuActive,
    'layout-mobile-active': layoutState.staticMenuMobileActive,
    'p-input-filled': layoutConfig.inputStyle === 'filled',
    'p-ripple-disabled': !layoutConfig.ripple,
  });
  return (
    <>
      {user ? (
        <div className={containerClass}>
          <div className='layout-main-container'>
            <Header />
            <main className='layout-main'>
              <Outlet />
            </main>
          </div>
          <Footer />
        </div>
      ) : (
        <Navigate to='/' replace={true} />
      )}
    </>
  );
}
