import { FC, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import styles from './styles'

interface DialogProps {
  visible: boolean;
  closeDialog: (event: GestureResponderEvent) => void;
  confirm: (event: GestureResponderEvent) => void;
}

const Dialog: FC<DialogProps> = ({ visible, closeDialog, confirm }) => {
  const [visiblest, setvisible] = useState(visible);

  useEffect(() => {
    if (!visible) {
      setTimeout(() => {
        setvisible(false);
      }, 250);
    } else {
      setvisible(true);
    }
  }, [visible]);

  if (visiblest) {
    return (
      <View style={styles.dialog}>
        <Animatable.View
          animation={visible ? 'zoomIn' : 'zoomOut'}
          style={styles.dialogbox}
          duration={250}>
          <Text style={styles.warning}>Are you Sure?</Text>
          <Text>This action cannot be reverted.</Text>

          <View style={styles.card}>
            <TouchableOpacity onPress={closeDialog} style={styles.cancel}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={confirm} style={styles.confirm}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }

  return <></>;
};


export default Dialog;
