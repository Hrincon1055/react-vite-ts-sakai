import { ReactNode } from 'react';

/* Context Types */
export type LayoutState = {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
};

export type LayoutConfig = {
  ripple: boolean;
  inputStyle: string;
  menuMode: string;
  colorScheme: string;
  theme: string;
  scale: number;
};

export interface LayoutContextProps {
  layoutConfig: LayoutConfig;
  setLayoutConfig: Dispatch<SetStateAction<LayoutConfig>>;
  layoutState: LayoutState;
  setLayoutState: Dispatch<SetStateAction<LayoutState>>;
  onMenuToggle: () => void;
  showProfileSidebar: () => void;
}

type ChildContainerProps = {
  children: ReactNode;
};

export type {
  ChildContainerProps,
  LayoutConfig,
  LayoutContextProps,
  LayoutState,
};
