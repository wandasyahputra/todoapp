import * as React from 'react';
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/components/Nav';

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'All Task',
        url: '/',
        key: 'key5',
        icon: 'Home',
      },
      {
        name: 'My Day',
        url: '/myday',
        key: 'key1',
        icon: 'Sunny',
      },
      {
        name: 'Important',
        url: '/important',
        key: 'key4',
        icon: 'FavoriteStar',
      },
    ]
  },
];

export const NavFabricDemoAppExample: React.FunctionComponent = () => {
  return (
    <Nav className="custom-menu" groups={navLinkGroups} />
  );
};
