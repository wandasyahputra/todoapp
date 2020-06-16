import * as React from 'react';
import { IButtonStyles, DefaultButton, IIconProps, DefaultPalette  } from 'office-ui-fabric-react';
import { SharedColors } from '@uifabric/fluent-theme'

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
  text?: string;
  icon?: string;
  type?: string;
  onClick: any;
}


export const ButtonDefaultExample: React.FunctionComponent<IButtonExampleProps> = props => {
  const { text, icon, type } = props;
  const addIcon: IIconProps = { iconName: icon };
  const blockButton: IButtonStyles = {
    root: {
      width: '100%',
      padding: 20,
      margin: '10px 0',
      backgroundColor: type === 'danger' ? SharedColors.red10 : DefaultPalette.neutralLighter ,
      borderColor: type === 'danger' ? SharedColors.red10 : DefaultPalette.neutralLighter ,
      color: type === 'danger' ? DefaultPalette.white : DefaultPalette.black
    },
    rootHovered: {
      backgroundColor: type === 'danger' ? SharedColors.red20 : DefaultPalette.neutralLight ,
      borderColor: type === 'danger' ? SharedColors.red20 : DefaultPalette.neutralLight ,
      color: type === 'danger' ? DefaultPalette.white : DefaultPalette.black
    },
    flexContainer: {
      flexDirection: 'row-reverse'
    }
  }

  return (
    <DefaultButton text={text} onClick={props.onClick} styles={blockButton} allowDisabledFocus iconProps={addIcon} />
  );
};