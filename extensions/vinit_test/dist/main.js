"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.methods = void 0;
const packageJSON = require("../package.json");
/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
exports.methods = {
    async log() {
        const options = {
            name: packageJSON.name,
            method: "rotateCamera",
            args: [],
        };
        // result: {}
        const result = await Editor.Message.request("scene", "execute-scene-script", options);
        console.log("result", result);
        // const { Node } = require("cc");
        // /***Show webview code starts */
        // // Create a new node for the web view
        // let node = new Node("box");
        // node.setPosition(0, 0, -10);
        //console.log("node", node);
        // /***Show webview code ends */
        console.log("Hello World");
    },
};
/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
function load() { }
exports.load = load;
/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
function unload() { }
exports.unload = unload;
