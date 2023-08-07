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

      <View style={tw`text-center mt-3 h-1/2`}>
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
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "peru",
  },
  insideModalTit: {
    fontSize: 15,
    marginTop: 6,
    marginBottom: 6,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "black",
    backgroundColor: "",
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
    marginRight: "42%",
    marginLeft: "42%",
    padding: 6,
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
    margin: "18%",
    backgroundColor: "white",
    borderRadius: 24,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 14,
      height: 7,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 8,
  },
});
