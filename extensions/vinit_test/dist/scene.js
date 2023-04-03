"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.unload = exports.load = void 0;
const path_1 = require("path");
module.paths.push((0, path_1.join)(Editor.App.path, "node_modules"));
function load() { }
exports.load = load;
function unload() { }
exports.unload = unload;
exports.methods = {
    rotateCamera() {
        const { director, Node, WebView, Label, Color, Component, String, } = require("cc");
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
