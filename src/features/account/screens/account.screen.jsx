import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AuthButton,
  AnimationWrapper,
  AccountBackground,
  AccountContainer,
  AccountCover,
  AppTitle,
} from "../components/account.styles";
import LottieView from "lottie-react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <AppTitle>Meals to Gooo</AppTitle>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="email"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
