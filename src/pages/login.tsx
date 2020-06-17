import React from 'react';
import { Stack, Text, FontIcon, DefaultPalette } from 'office-ui-fabric-react';
import { GoogleLoginButton } from 'ts-react-google-login-component';
import { SharedColors } from '@uifabric/fluent-theme';


export const Login: React.FunctionComponent = () => {
  const responseHandler = (googleUser: gapi.auth2.GoogleUser) => {
    const googleId = googleUser.getId()
    localStorage.setItem('login',googleId)
    window.location.pathname = '/'
}
  return (
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        styles={{
          root: {
            width: '100vw',
            margin: '0 auto',
            textAlign: 'center',
            color: '#605e5c'
          }
        }}
        gap={15}
      > 
        <Text variant="mega" style={{color: DefaultPalette.themePrimary}}>
          <FontIcon iconName="ToDoLogoInverse" />
        </Text>
        <Text style={{fontWeight: 800, marginBottom: 20, marginTop: 0 , color: SharedColors.gray40}}>
          To Do
        </Text>
        <GoogleLoginButton
        clientConfig={{client_id: '1041285346418-mstlerfui9ts58gtchk8ihbavmvbdq9v.apps.googleusercontent.com'}}
        responseHandler={responseHandler}
        />
      </Stack>
  );
};

export default Login