import * as React from 'react';
import { Nav, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/components/Nav';

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'My Day',
        url: '/',
        key: 'key1',
        icon: 'Sunny',
        onClick: handleNavClick
      },
      {
        name: 'Important',
        url: '/#important',
        key: 'key4',
        icon: 'FavoriteStarFill',
      },
      {
        name: 'All Task',
        url: '/all',
        key: 'key5',
        icon: 'EntitlementPolicy',
      },
    ]
  },
];
function handleNavClick(event: any):void {
  event.preventDefault()
  window.history.pushState({urlPath:event.currentTarget.pathname},"",event.currentTarget.pathname)
}


export const NavFabricDemoAppExample: React.FunctionComponent = () => {
  return (
    <Nav onLinkClick={handleNavClick} className="custom-menu" groups={navLinkGroups} />
  );
};
