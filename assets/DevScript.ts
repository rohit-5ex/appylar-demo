import {
  _decorator,
  Component,
  EditBox,
  Button,
  ToggleComponent
} from "cc";

const { ccclass, property } = _decorator;

import { AppylarScript } from "./AppylarScript";

@ccclass("DevScript")
export class DevScript extends Component {
  public apiKeyEditbox: any = null;
  public initButton: any = null;
  public responseEditBox: any = null;
  public bannerToggle: any = null;
  public interToggle: any = null;
  public topToggle: any = null;
  public bottomToggle: any = null;
  public portraitToggle: any = null;
  public landscapeToggle: any = null;
  public bannerWidthTxt: any = null;
  public bannerHeightTxt: any = null;
  public appylarScript: AppylarScript = null;

  onLoad() {
    this.appylarScript = new AppylarScript(this.node)
    console.log(this.node.getChildByName("apiKeyEditBox").getComponent(EditBox));
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

    this.topToggle = this.node
      .getChildByName("topToggle")
      .getComponent(ToggleComponent)

    this.bottomToggle = this.node
      .getChildByName("bottomToggle")
      .getComponent(ToggleComponent)

    this.interToggle = this.node
      .getChildByName("interToggle")
      .getComponent(ToggleComponent)

  }

  initialization() {
    const apiKey = this.apiKeyEditbox.getComponent(EditBox).placeholder;
    this.appylarScript.initializationFunction(apiKey);
  }

  checkIfCanShowAd() {
    const response = this.appylarScript.checkIfCanShowAd("banner");
    if (response) {
      this.responseEditBox.string += "\n" + JSON.stringify({
        res: response,
      });
    } else {
      this.responseEditBox.string += "\n" + JSON.stringify({
        res: response,
      });
    }
  }

  showBannerAd() {
    console.log('Top', this.topToggle.isChecked);
    console.log('Bottom', this.bottomToggle.isChecked);
    if (this.topToggle.isChecked) {
      const response: any = this.appylarScript.showTopAd();
      if (response) {
        this.responseEditBox.string += "\n" + JSON.stringify({
          res: response,
        });
      } else {
        this.responseEditBox.string += "\n" + JSON.stringify({
          res: response,
        });
      }
    }
    if (this.bottomToggle.isChecked) {
      const response: any = this.appylarScript.showBottomAd();
      if (response) {
        this.responseEditBox.string += "\n" + JSON.stringify({
          res: response,
        });
      } else {
        this.responseEditBox.string += "\n" + JSON.stringify({
          res: response,
        });
      }
    }
  }

  showInterstitialAd() {
    if (this.interToggle.isChecked) {
      const response: any = this.appylarScript.showInterstitial();
      if (response) {
        this.responseEditBox.string += "\n" + JSON.stringify({
          res: response,
        });
      } else {
        this.responseEditBox.string += "\n" + JSON.stringify({
          res: response,
        });
      }
    }
  }

  start() {

  }
  update(deltaTime: number) { }
}
