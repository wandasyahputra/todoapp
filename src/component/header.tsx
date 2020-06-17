import * as React from 'react';
import { Stack, IStackItemStyles, DefaultPalette, Text, ITextStyles, FontIcon, IButtonStyles, IIconProps, ActionButton } from 'office-ui-fabric-react';

export const Header: React.FunctionComponent = props => {
  const stackStyle: IStackItemStyles = {
    root: {
      background: DefaultPalette.themePrimary,
      color: DefaultPalette.white,
      fontWeight: 500,
      display: 'flex',
      padding: 5,
      justifyContent: "space-between"
    },
  };
  const parentStyle: ITextStyles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500,
      margin: '0 0 0 15px'
    }
  }
  const textStyle: ITextStyles = {
    root: {
      fontWeight: 500,
      margin: '0 0 0 15px'
    }
  }

  const iconStyle: IButtonStyles = {
    icon: {
      color: DefaultPalette.white,
      fontSize: '20px',
    }
  }

  const logout = () => {
    localStorage.setItem('login', '')
    window.location.pathname = '/login'
  }
  const power: IIconProps = { iconName: 'PowerButton', };
  return (
    <Stack horizontal styles={stackStyle}>
      <Text variant="xxLarge" styles={parentStyle}>
        <FontIcon iconName="ToDoLogoInverse" />
        <Text variant="xxLarge" styles={textStyle}>
          {'To Do'}
        </Text>
      </Text>
      <ActionButton iconProps={power} styles={iconStyle} onClick={logout} />
    </Stack>
  );
};