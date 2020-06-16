import * as React from 'react';
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/components/Nav';

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'My Day',
        url: '/',
        key: 'key1',
        icon: 'Sunny',
        // onClick: handleNavClick
      },
      {
        name: 'Important',
        url: '/important',
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

export const NavFabricDemoAppExample: React.FunctionComponent = () => {
  return (
    <Nav className="custom-menu" groups={navLinkGroups} />
  );
};
