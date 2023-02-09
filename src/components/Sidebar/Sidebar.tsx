import { ReactNode } from 'react';

import classes from './Sidebar.module.css';

type SidebarProps = {
  children: ReactNode;
  onBackDropClick: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ children, onBackDropClick }: SidebarProps) => {
  const sidebarClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={onBackDropClick}>
        <div className={classes.sidebar} onClick={sidebarClickHandler}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
