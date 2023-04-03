/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
import {
  init,
  requestAds,
  initSecond,
  initPlaceholder,
  rejectUnauthorized,
  unsetrejectUnauthorized,
} from "@appylar/cocos-sdk";
// export const methods: { [key: string]: (...any: any) => any } =

export const methods = {
  openAdPopup() {
    console.log("message");
    Editor.Panel.open("cocos-sample-test.mainPanel");
  },

  placeHolderAPI() {
    initPlaceholder().then((res2) => {
      console.log(res2, "Placeholder API Response");
      Editor.Panel.open;
    });
  },
  mittskolvalAPI() {
    initSecond().then((res1) => {
      console.log(res1, "mittskolval API Response");
    });
  },
  initAPI() {
    init(720, 2.0, 1000, "IN", "en", "", "jrctNFE1b-7IqHPShB-gKw", [
      "landscape",
      "portrait",
    ]).then((res1) => {
      console.log(res1, "Init API Response");
    });
  },

  requestAdsAPI() {
    requestAds({
      portrait: ["banner", "interstitial"],
      landscape: ["banner", "interstitial"],
    }).then((res1) => {
      console.log(res1, "REQUEST AD DATA");
    });
  },

  rejectunauthAPI() {
    console.log(rejectUnauthorized());
  },
  unsetrejectunauthAPI() {
    console.log(unsetrejectUnauthorized());
  },
};
/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
export function load() {}

/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
export function unload() {}
