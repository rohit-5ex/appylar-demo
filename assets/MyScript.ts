import {
  _decorator,
  Component,
  LabelComponent,
  Node,
  EditBox,
  Button,
  Toggle,
  WebView,
  Label,
  size,
  v2,
  find,
  Size,
  Sprite,
  ToggleComponent,
  director,
  UITransform,
} from "cc";

const { ccclass, property } = _decorator;

import { init, canShowAd, showAd, MyCallback } from "@appylar/cocos-sdk";
// import { log } from "console";
// import {
//   MyCallback, init, canShowAd, showAd
// } from "../cocos-sdk/index";

@ccclass("MyScript")
export class MyScript extends Component {
  public apiKeyEditbox: any = null;
  public initButton: any = null;
  public responseEditBox: any = null;
  public bannerToggle: any = null;
  public interToggle: any = null;
  public portraitToggle: any = null;
  public landscapeToggle: any = null;
  public topToggle: any = null;
  public bottomToggle: any = null;
  public topAd: any = null;
  public bottomAd: any = null;
  public bannerWidthTxt: any = null;
  public bannerHeightTxt: any = null;
  webViewNode: any;
  webView: any;

  onLoad() {

    // Define a callback function
    // const myCallback: MyCallback = (result: string) => {
    //   console.log("callback run", result); // Log the result to the console
    // };

    // getResult(myCallback).then((res) => {
    //   console.log("response myCallback", res);
    // })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });

    this.apiKeyEditbox = this.node
      .getChildByName("apiKeyEditBox")
      .getComponent(EditBox);

    this.initButton = this.node
      .getChildByName("InitButton")
      .getComponent(Button);

    this.responseEditBox = this.node
      .getChildByName("responseEditBox")
      .getComponent(EditBox);

    this.bannerWidthTxt = this.node
      .getChildByName("bannerWidthTxt")
      .getComponent(EditBox);

    this.bannerHeightTxt = this.node
      .getChildByName("bannerHeightTxt")
      .getComponent(EditBox);

    this.topAd = this.node
      .getChildByName("topAd")
      .getComponent(WebView);

    this.bottomAd = this.node
      .getChildByName("bottomAd")
      .getComponent(WebView);

    this.topToggle = this.node
      .getChildByName("topToggle")
      .getComponent(ToggleComponent)

    this.bottomToggle = this.node
      .getChildByName("bottomToggle")
      .getComponent(ToggleComponent)
  }



  initializationFunction() {
    // Define a callback function
    const myCallback: MyCallback = (result: string) => {
      console.log("callback run IN", result); // Log the result to the console
    };

    const apiKey = this.apiKeyEditbox.getComponent(EditBox).placeholder;
    const apiId = "";
    const width = this.bannerWidthTxt.getComponent(EditBox).placeholder;
    const height = this.bannerHeightTxt.getComponent(EditBox).placeholder;
    const density = 2.0;
    const orientations: any = ["landscape", "portrait"];
    const country = "IN";
    const language = "en";
    init(width, density, height, country, language, apiId, apiKey, orientations, myCallback)
      .then((res) => {
        console.log("Moin", myCallback)
        this.responseEditBox.string += "\n" + JSON.stringify({
          res: res,
        });
      })
      .catch((error) => {
        this.responseEditBox.string += JSON.stringify(error)
      });
  }

  checkIfCanShowAd() {
    // Define a callback function
    const myCallback: MyCallback = (result: string) => {
      console.log("callback run INin", result); // Log the result to the console
    };
    const tempStatus = canShowAd("banner", myCallback);
    console.log("Moin", myCallback)

    if (tempStatus) {
      this.responseEditBox.string += "\n" + JSON.stringify({
        res: tempStatus,
      });
    } else {
      this.responseEditBox.string += "\n" + JSON.stringify({
        res: tempStatus,
      });
    }
  }

  showOneAd() {
    const myCallback: MyCallback = (result: string) => {
      console.log("callback run IN", result); // Log the result to the console
    };
    if (this.topToggle.isChecked) {
      showAd("banner", myCallback)
        .then((res) => {
          this.responseEditBox.string += "\n" + JSON.stringify({
            res: JSON.stringify(res),
          });

          let node = this.node
            .getChildByName("topAd");
          var myWebView = node.addComponent(WebView);
          var url = res.url;
          console.log('top banner called')
          console.log("SHOW AD RES")
          myWebView.url = url;
          const uiTransform = myWebView.getComponent(UITransform);
          uiTransform.setContentSize(900, 200);
          uiTransform.setAnchorPoint(0.5, 0.5);
        })
        .catch((error) => {
          this.responseEditBox.string += JSON.stringify(error)
        });
    }
    if (this.bottomToggle.isChecked) {
      showAd("banner", myCallback)
        .then((res) => {
          this.responseEditBox.string += JSON.stringify({
            res: JSON.stringify(res),
          });

          let node = this.node
            .getChildByName("bottomAd");

          var myWebView = node.addComponent(WebView);
          var url = res.url;
          console.log('bottom called')
          myWebView.url = url;
          const uiTransform = myWebView.getComponent(UITransform);
          uiTransform.setContentSize(900, 200);
          uiTransform.setAnchorPoint(0.5, 0.5);
        })
        .catch((error) => {
          this.responseEditBox.string += JSON.stringify(error)
        });
    }
  }
  start() { }
  update(deltaTime: number) { }
}
