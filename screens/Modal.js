import React, {useState} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
  BottomModal,
} from 'react-native-modals';

/**
 * @author
 * @function TheModal
 **/

const TheModal = () => {
  const [customBackgroundModal, setCustomBackGroundModal] = useState(false);
  const [defaultAnimationModal, setDefaultAnimationModal] = useState(false);
  const [swipeableModal, setSwipeableModal] = useState(false);
  const [scaleAnimationModal, setScaleAnimationModal] = useState(false);
  const [slideAnimationModal, setSlideAnimationModal] = useState(false);
  const [bottomModalAndTitle, setBottomModalAndTitle] = useState(false);
  const [bottomModal, setBottomModal] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Button
          title="Show Modal - Default Animation"
          onPress={() => setDefaultAnimationModal(!defaultAnimationModal)}
        />
        <Button
          title="Show Modal - Swipeable Modal Animation"
          onPress={() => setSwipeableModal(!swipeableModal)}
        />
        <Button
          title="Show Modal - Scale Animation"
          onPress={() => setScaleAnimationModal(!scaleAnimationModal)}
        />
        <Button
          title="Show Modal - Slide Animation"
          onPress={() => setSlideAnimationModal(!slideAnimationModal)}
        />

        <Button
          title="Show Modal - Custom Background Style"
          onPress={() => setCustomBackGroundModal(!customBackgroundModal)}
        />

        <Button
          title="Bottom Modal with Title"
          onPress={() => setBottomModalAndTitle(!bottomModalAndTitle)}
        />

        <Button
          title="Bottom Modal without Title"
          onPress={() => setBottomModal(!bottomModal)}
        />
      </View>
      <Modal
        width={0.9}
        visible={defaultAnimationModal}
        rounded
        actionsBordered
        style={{zIndex: 1000}}
        onTouchOutside={() => setDefaultAnimationModal(!defaultAnimationModal)}
        modalTitle={<ModalTitle title="Popup Modal" align="left" />}
        footer={
          <ModalFooter>
            <ModalButton
              text="CANCEL"
              bordered
              onPress={() => setDefaultAnimationModal(!defaultAnimationModal)}
              key="button-1"
            />
            <ModalButton
              text="OK"
              bordered
              onPress={() => setDefaultAnimationModal(!defaultAnimationModal)}
              key="button-2"
            />
          </ModalFooter>
        }>
        <ModalContent style={{backgroundColor: '#fff'}}>
          <Text>Default Animation</Text>
        </ModalContent>
      </Modal>

      <Modal
        onDismiss={() => setSwipeableModal(!swipeableModal)}
        width={0.9}
        overlayOpacity={1}
        visible={swipeableModal}
        rounded
        actionsBordered
        onSwipeOut={() => setSwipeableModal(!swipeableModal)}
        onTouchOutside={() => setSwipeableModal(!swipeableModal)}
        swipeDirection={['down', 'up']} //chưa hiểu
        modalAnimation={new SlideAnimation({slideFrom: 'bottom'})}
        modalTitle={<ModalTitle title="Swipeable Modal" />}
        footer={
          <ModalFooter>
            <ModalButton
              text="CANCEL"
              bordered
              onPress={() => setSwipeableModal(!swipeableModal)}
              key="button-1"
            />
            <ModalButton
              text="OK"
              bordered
              onPress={() => setSwipeableModal(!swipeableModal)}
            />
          </ModalFooter>
        }>
        <ModalContent style={{backgroundColor: '#fff', paddingTop: 24}}>
          <Text>Swipeable</Text>
          <Text>Swipe Up/Down</Text>
        </ModalContent>
      </Modal>

      <Modal
        onTouchOutside={() => setScaleAnimationModal(!scaleAnimationModal)}
        width={0.9}
        visible={scaleAnimationModal}
        onSwipeOut={() => setScaleAnimationModal(!scaleAnimationModal)}
        modalAnimation={new ScaleAnimation()}
        onHardwareBackPress={() => {
          console.log('onHardwareBackPress');
          setScaleAnimationModal(!scaleAnimationModal);
          return true;
        }}
        modalTitle={
          <ModalTitle title="Modal - Scale Animation" hasTitleBar={false} />
        }
        actions={[
          <ModalButton
            text="DISMISS"
            onPress={() => setScaleAnimationModal(!scaleAnimationModal)}
            key="button-1"
          />,
        ]}>
        <ModalContent>
          <Button
            title="Show Modal - Default Animation"
            onPress={() => setScaleAnimationModal(!scaleAnimationModal)}
          />
        </ModalContent>
      </Modal>

      <Modal
        onDismiss={() => setSlideAnimationModal(!slideAnimationModal)}
        onTouchOutside={() => setSlideAnimationModal(!slideAnimationModal)}
        swipeDirection="down"
        onSwipeOut={() => setSlideAnimationModal(!slideAnimationModal)}
        visible={slideAnimationModal}
        modalTitle={
          <ModalTitle title="Modal - Slide Animation" hasTitleBar={false} />
        }
        modalAnimation={new SlideAnimation({slideFrom: 'bottom'})}>
        <ModalContent>
          <Text>Slide Animation</Text>
        </ModalContent>
      </Modal>

      <Modal
        onDismiss={() => setCustomBackGroundModal(!customBackgroundModal)}
        onTouchOutside={() => setCustomBackGroundModal(!customBackgroundModal)}
        zIndex={1000}
        backgroundStyle={styles.customBackgroundModal}
        modalStyle={{
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        modalTitle={
          <ModalTitle
            title="Modal - Custom Background Style"
            hasTitleBar={false}
            textStyle={{color: '#fff'}}
          />
        }
        visible={customBackgroundModal}>
        <View style={styles.dialogContentView}>
          <Text style={{color: '#fff'}}>Custom backgroundStyle</Text>
        </View>
      </Modal>

      <BottomModal
        visible={bottomModalAndTitle}
        onTouchOutside={() => setBottomModalAndTitle(!bottomModalAndTitle)}
        height={0.5}
        width={1}
        onSwipeOut={() => setBottomModalAndTitle(!bottomModalAndTitle)}
        modalTitle={<ModalTitle title="Bottom Modal" hasTitleBar />}>
        <ModalContent
          style={{
            flex: 1,
            backgroundColor: 'fff',
          }}>
          <Text>Bottom Modal with Title</Text>
        </ModalContent>
      </BottomModal>

      <BottomModal
        visible={bottomModal}
        onTouchOutside={() => setBottomModal(!bottomModal)}
        // modalStyle={{  }}
      >
        <ModalContent
          style={{
            backgroundColor: 'fff',
            // height: '40%',
          }}>
          <Text>Bottom Modal without Title</Text>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  customBackgroundModal: {
    opacity: 0.5,
    backgroundColor: '#000',
  },
});

export default TheModal;
