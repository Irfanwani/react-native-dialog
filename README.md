## React-Native-Dialog

React native dialog library to show dialog boxes

#### How to thank me ?

Just click on ⭐️ button 😘

<br >
<br >

<span>
<video width="300" height="400" autoplay muted>
  <source src="https://drive.google.com/file/d/15a5HiTetH0ovAVpr9gLBtbzxebPYFJSx/view?usp=sharing" type="video/mp4">
</video>
</span>

## Installation:

```
npm install --save @irfanwani/react-native-dialog
OR
yarn add @irfanwani/react-native-dialog
```

## Basic Usage

```tsx
import { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  GestureResponderEvent,
} from "react-native";

import Dialog from "@irfanwani/react-native-dialog";

export default () => {
  const [visible, setvisible] = useState(false);

  const showModal: (event: GestureResponderEvent) => void = () => {
    setvisible(true);
  };
  return (
    <View style={styles.container}>
      <Button title="show modal" onPress={showModal} />
      <Dialog
        title="Dialog Title"
        cancelText="Cancel"
        subtitle="Dialog subtitle which is shown under the title"
        confirmText="Confirm"
        visible={visible}
        closeDialog={() => {
          setvisible(false);
        }}
        confirm={() => {
          console.log("confirmed");
        }}
      />
    </View>
  );
};
```

## Props

| Prop                | Type                                     | Required                          | Note                                           |
| ------------------- | ---------------------------------------- | --------------------------------- | ---------------------------------------------- |
| `visible`           | `boolean`                                | True                              | Determines whether the dialog is shown or not  |
| `title`             | `string`                                 | True                              | Title for the dialog                           |
| `subtitle`          | `string` | True                             | Extra description about the alert |
| `closeDialog`       | `(event: GestureResponderEvent) => void` | True                              | Callback for the close button                  |
| `confirm`           | `(event: GestureResponderEvent) => void` | True                              | Callback for the confirm button                |
| `confirmText`       | `string`                                 | True                              | text to be shown on the confirm button         |
| `cancelText`        | `string`                                 | True                              | text to be shown on the cancel button          |
| `titleStyle?`       | `Object`                                 | False                             | Styles object for the title                    |
| `cancelStyle?`      | `Object`                                 | False                             | Styles object for the cancel button container  |
| `confirmStyle?`     | `Object`                                 | False                             | Styles object for the confirm button container |
| `subtitleStyle?`    | `Object`                                 | False                             | Styles object for the subtitle button          |
| `cancelTextStyle?`  | `Object`                                 | False                             | Styles object for the cancel button text       |
| `confirmTextStyle?` | `Object`                                 | False                             | Styles object for the confirm button text      |
