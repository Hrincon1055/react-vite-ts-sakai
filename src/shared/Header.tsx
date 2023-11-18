import { useContext } from 'react';
import { classNames } from 'primereact/utils';
import { LayoutContext } from '../context/layoutcontext';

export function Header() {
  const { layoutState, layoutConfig } = useContext(LayoutContext);
  return (
    <div className='layout-topbar'>
      <div className='layout-topbar-logo'>
        <img
          src={`../../images/logo-${
            layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'
          }.svg`}
          width='47.22px'
          height={'35px'}
          alt='logo'
        />
        <span>SAKAI</span>
      </div>
      <div
        className={classNames('layout-topbar-menu', {
          'layout-topbar-menu-mobile-active':
            layoutState.profileSidebarVisible,
        })}>
        <button type='button' className='p-link layout-topbar-button'>
          <i className='pi pi-calendar'></i>
          <span>Calendar</span>
        </button>
        <button type='button' className='p-link layout-topbar-button'>
          <i className='pi pi-user'></i>
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}
