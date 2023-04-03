import { join } from "path";
module.paths.push(join(Editor.App.path, "node_modules"));

export function load() {}

export function unload() {}

export const methods = {
  rotateCamera() {
    const {
      director,
      Node,
      WebView,
      Label,
      Color,
      Component,
      String,
    } = require("cc");
    // let mainCamera = director.getScene().getChildByName("Main Camera");
    // if(mainCamera){
    //     let euler = mainCamera.eulerAngles;
    //     euler.y += 10;
    //     mainCamera.setRotationFromEuler(euler);
    //     return true;
    // }
    // return false;

    /***Show webview code starts */

    // Create a new node for the web view
    var mywebViewNode = new Node('webview');
    var mywebView = mywebViewNode.addComponent(WebView);

    // Set the URL to load
    var url = "https://5exceptions.com/";
    mywebView.url = url;

    mywebViewNode.setScale(1, 1);

    mywebViewNode.setPosition(300, 100);

    //console.log("mywebView", mywebView);

    director.getScene().addChild(mywebViewNode);

    return true;

    /***Show webview code ends */
  },
};
