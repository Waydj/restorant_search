import React, { useContext, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 80%;
  height: 60%;
`;

const PhotoContainerOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`@user-${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    return <Text>No permissions</Text>;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission}>perm</Button>
      </View>
    );
  }

  return (
    <PhotoContainerOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={CameraType.front}
      />
    </PhotoContainerOpacity>
  );
};

export default CameraScreen;
