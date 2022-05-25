import * as React from "react";
import { WebView } from "react-native-webview";

export default class App extends React.Component {
  render() {
    return (
      <WebView 
      source={{ uri: 'https://besafefrontend.herokuapp.com' }} 
      style={{ marginTop: 33 }} 
      />
    );
  }
}