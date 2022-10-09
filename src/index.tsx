import { FC, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from "react-native";

import * as Animatable from "react-native-animatable";

import styles from "./styles";

// ADD OTHER PROPS LIKE CONFIRM STYLES, CANCEL STYLES,OTHER STYLES AS PROPS TO SUPPORT DYNAMIC STYLING, CHANGE TITLE, SUBTTILE FROM STRING TO REACT COMPONENTS FOR MORE CUSTOMIZATION OPTIONS, DARK AND LIGHT MODE, LINEARGRADIENT(OPTIONAL), BACKDROP (CLOSE WHEN CLICKED OUTSIDE DIALOG).

interface DialogProps {
  visible: boolean;
  title: string;
  subtitle: string;
  closeDialog: (event: GestureResponderEvent) => void;
  confirm: (event: GestureResponderEvent) => void;
  confirmText: string;
  titleStyle?: Object;
  cancelStyle?: Object;
  confirmStyle?: Object;
  subtitleStyle?: Object;
  cancelTextStyle?: Object;
  cancelText: string;
  confirmTextStyle?: Object;
}

const Dialog: FC<DialogProps> = ({
  visible,
  title,
  subtitle,
  closeDialog,
  confirm,
  confirmText,
  confirmTextStyle,
  titleStyle,
  cancelStyle,
  confirmStyle,
  subtitleStyle,
  cancelTextStyle,
  cancelText,
}) => {
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
      <View style={styles.dialog} onTouchEnd={closeDialog}>
        <Animatable.View
          animation={visible ? "zoomIn" : "zoomOut"}
          style={styles.dialogbox}
          duration={250}
        >
          <Text style={[styles.warning, titleStyle]}>{title}</Text>
          <Text style={subtitleStyle}>{subtitle}</Text>

          <View style={styles.card}>
            <TouchableOpacity
              onPress={closeDialog}
              style={[styles.cancel, cancelStyle]}
            >
              <Text style={cancelTextStyle}>{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={confirm}
              style={[styles.confirm, confirmStyle]}
            >
              <Text style={confirmTextStyle}>{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }

  return <></>;
};

export default Dialog;
