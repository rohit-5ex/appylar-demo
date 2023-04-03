
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
} from "cc";
const { ccclass, property } = _decorator;
import { init, showAd, canShowAd } from "appylar-package-5ex";

// Import the NPM package
//var MyNpmPackage = require("../my-npm-package");

// import MyNpmPackage from "../my-npm-package";

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
  public topWebview: any = null;
  public bottomWebview: any = null;
  public bannerWidthTxt: any = null;
  public bannerHeightTxt: any = null;
  onLoad() {
    // Log a message
    // MyNpmPackage.log("Vinit Hello, world!");

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

    this.topWebview = this.node
      .getChildByName("topWebview")
      .getComponent(WebView);

    this.bottomWebview = this.node
      .getChildByName("bottomWebview")
      .getComponent(WebView);

    this.topToggle = this.node
      .getChildByName("topToggle")
      .getComponent(ToggleComponent)

    this.bottomToggle = this.node
      .getChildByName("bottomToggle")
      .getComponent(ToggleComponent)

    // Create a new node for the web view
    // var mywebViewNode = this.node; //new Node();
    // var mywebView = mywebViewNode.addComponent(WebView);

    // Set the URL to load
    // var url = "https://5exceptions.com/";


    // mywebView.url = url;

    // var mywebViewNode = find("mywebViewNode"); // Replace with the name of your node
    // const webViewComponent = mywebViewNode.getComponent(WebView);
    // const newWebViewSize = new Size(250, 10); // Replace with the new size you want
    // webViewComponent.setContentSize(newWebViewSize);
    // Set the size and position of the web view
    // mywebViewNode.setScale(9.5, 1, 1);
    // mywebViewNode.setScale(1, 1);

    //mywebViewNode.setPosition

    // mywebViewNode.setPosition(3.582, 668.478, 0);
    //mywebViewNode.setPosition(0, 0);

    // Add the web view node to the current node
    //mywebViewNode.parent = this.node;

    // // Add the web view node to the current node
    // mywebViewNode.parent = this.node;

    //this.node.addChild(mywebViewNode);

    // console.log("mywebView", mywebView);
  }

  initializationFunction() {
    const apiKey = this.apiKeyEditbox.getComponent(EditBox).placeholder;
    const apiId = "";
    const width = this.bannerWidthTxt.getComponent(EditBox).placeholder;
    const height = this.bannerHeightTxt.getComponent(EditBox).placeholder;
    const density = 2.0;
    const orientations: any = ["landscape", "portrait"];
    const country = "IN";
    const language = "en";
    init(width, density, height, country, language, apiId, apiKey, orientations)
      .then((res) => {
        this.responseEditBox.string += JSON.stringify({
          res: res,
        });
      })
      .catch((error) => {
        this.responseEditBox.string += JSON.stringify(error)
      });
  }

  checkIfCanShowAd() {
    canShowAd("banner")
      .then((res) => {
        this.responseEditBox.string += JSON.stringify({
          res: res,
        });
      })
      .catch((error) => {
        this.responseEditBox.string += JSON.stringify(error)
      });
  }

  showOneAd() {
    if (this.topToggle.isChecked) {
    showAd("banner")
      .then((res) => {
        this.responseEditBox.string += JSON.stringify({
          res: JSON.stringify(res),
        });
        this.topWebview.url = res.url;
      })
      .catch((error) => {
        this.responseEditBox.string += JSON.stringify(error)
      });
    }
    if (this.bottomToggle.isChecked) {
    showAd("banner")
      .then((res) => {
        this.responseEditBox.string += JSON.stringify({
          res: JSON.stringify(res),
        });
        this.bottomWebview.url = res.url;
      })
      .catch((error) => {
        this.responseEditBox.string += JSON.stringify(error)
      });
    }
  }


  // showOneAdBottom() {
  //   showAd("banner")
  //     .then((res) => {
  //       this.responseEditBox.string = {
  //         res: JSON.stringify(res),
  //       };
  //       this.bottomWebview.url = res.url;
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }


  start() { }
  update(deltaTime: number) { }
}
