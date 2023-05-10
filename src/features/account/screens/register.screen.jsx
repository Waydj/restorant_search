import React, { useContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const auth = getAuth();
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        <Spacer size="medium" />
        <AuthInput
          label="Repeate Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setRepeatedPassword(text)}
        />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" />
        {!isLoading ? (
          <AuthButton
            icon="email"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator
            animating={true}
            color={MD2Colors.amber300}
          />
        )}
      </AccountContainer>
    </AccountBackground>
  );
};

export default RegisterScreen;
