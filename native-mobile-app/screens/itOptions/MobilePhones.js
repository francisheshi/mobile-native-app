import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  SafeAreaView,
} from "react-native";
import tw from "tailwind-react-native-classnames";

const mobData = [
  {
    id: "1M",
    title: "Mob. 1",
  },
  {
    id: "2M",
    title: "Mob. 2",
  },
  {
    id: "3M",
    title: "Mob. 3",
  },
];

const MobilePhones = () => {
  const [mobiles, setMobiles] = useState(mobData);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
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
            {mobiles.map((mobile) => (
              <Text
                key={mobile.id}
                id={mobile.id}
                style={styles.insideModalTit}
              >
                {mobile.title}
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

      <Text style={tw`text-center py-3 text-xl`}>Mobile Phones</Text>

      <View style={[tw`text-center mt-3 h-1/2`]}>
        {mobiles.map((mobile) => (
          <Pressable
            style={[styles.btnModal, styles.btnOpenModal, styles.textCustom]}
            onPress={() => setModalVisible(true)}
          >
            <Text
              key={mobile.id}
              id={mobile.id}
              style={styles.mobileTextCustom}
            >
              {mobile.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MobilePhones;

const styles = StyleSheet.create({
  textCustom: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "olivedrab",
  },
  insideModalTit: {
    fontSize: 15,
    marginTop: 6,
    marginBottom: 6,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "black",
  },
  mobileTextCustom: {
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
    marginRight: "38%",
    marginLeft: "38%",
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
