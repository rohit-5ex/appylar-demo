"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.methods = void 0;
/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
const cocos_sdk_1 = require("@appylar/cocos-sdk");
// export const methods: { [key: string]: (...any: any) => any } =
exports.methods = {
    openAdPopup() {
        console.log("message");
        Editor.Panel.open("cocos-sample-test.mainPanel");
    },
    placeHolderAPI() {
        (0, cocos_sdk_1.initPlaceholder)().then((res2) => {
            console.log(res2, "Placeholder API Response");
            Editor.Panel.open;
        });
    },
    mittskolvalAPI() {
        (0, cocos_sdk_1.initSecond)().then((res1) => {
            console.log(res1, "mittskolval API Response");
        });
    },
    initAPI() {
        (0, cocos_sdk_1.init)(720, 2.0, 1000, "IN", "en", "", "jrctNFE1b-7IqHPShB-gKw", [
            "landscape",
            "portrait",
        ]).then((res1) => {
            console.log(res1, "Init API Response");
        });
    },
    requestAdsAPI() {
        (0, cocos_sdk_1.requestAds)({
            portrait: ["banner", "interstitial"],
            landscape: ["banner", "interstitial"],
        }).then((res1) => {
            console.log(res1, "REQUEST AD DATA");
        });
    },
    rejectunauthAPI() {
        console.log((0, cocos_sdk_1.rejectUnauthorized)());
    },
    unsetrejectunauthAPI() {
        console.log((0, cocos_sdk_1.unsetrejectUnauthorized)());
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
