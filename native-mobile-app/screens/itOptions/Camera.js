import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import tw from "tailwind-react-native-classnames";

const cameraData = [
  {
    id: "1C",
    title: "Cam. 1",
  },
  {
    id: "2C",
    title: "Cam. 2",
  },
  {
    id: "3C",
    title: "Cam. 3",
  },
];

const Camera = () => {
  const [cameras, setCameras] = useState(cameraData);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {cameras.map((camera) => (
              <Text
                key={camera.id}
                id={camera.id}
                style={styles.insideModalTit}
              >
                {camera.title}
              </Text>
            ))}

            <Pressable
              style={[styles.btnModal, styles.btnCloseModal]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={tw`text-center py-3 text-xl`}>Camera</Text>

      <View style={tw`pl-1 pt-1 h-1/2`}>
        {cameras.map((camera) => (
          <Pressable
            style={[styles.btnModal, styles.btnOpenModal, styles.textCustom]}
            onPress={() => setModalVisible(true)}
          >
            <Text
              key={camera.id}
              id={camera.id}
              style={styles.cameraTextCustom}
            >
              {camera.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  textCustom: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "peru",
  },
  insideModalTit: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "black",
  },
  cameraTextCustom: {
    color: "white",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnModal: {
    shadowOpacity: 0.8,
    borderRadius: 8,
    marginRight: "40%",
    marginLeft: "40%",
    padding: 8,
    marginTop: 2,
  },
  btnOpenModal: {
    backgroundColor: "#F194FF",
  },
  btnCloseModal: {
    backgroundColor: "tomato",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalView: {
    margin: "12%",
    backgroundColor: "white",
    borderRadius: 22,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
});
