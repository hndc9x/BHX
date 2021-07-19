import React from 'react';
import {WebView} from 'react-native-webview';

/**
 * @author
 * @function TheWebView
 **/
const TheWebView = props => {
  return <WebView source={{uri: 'https://reactnative.dev/'}} />;
};

export default TheWebView;
