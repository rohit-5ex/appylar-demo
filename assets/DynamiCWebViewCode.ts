import { _decorator, Component, Node, instantiate, director, Label, WebView, UITransform, ToggleComponent, EditBox } from 'cc';
import { showAd } from "appylar-package-5ex";

const { ccclass, property } = _decorator;

@ccclass('DynamiCWebView')
export class DynamiCWebView extends Component {

    public topToggle: any = null;
    public bottomToggle: any = null;
    public topAd: any = null;
    public bottomAd: any = null;
    public responseEditBox: any = null;


    onLoad() {
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

        this.responseEditBox = this.node
            .getChildByName("responseEditBox")
            .getComponent(EditBox);
      
    }
    showOneAd() {
        if (this.topToggle.isChecked) {
            showAd("banner")
                .then((res) => {
                    this.responseEditBox.string += "\n" + JSON.stringify({
                        res: JSON.stringify(res),
                    });

                    let node = this.node
                        .getChildByName("topAd");
                    var myWebView = node.addComponent(WebView);
                    var url = res.url;
                    // var url = "https://5exceptions.com/"
                    console.log('top called')
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
            showAd("banner")
                .then((res) => {
                    this.responseEditBox.string += JSON.stringify({
                        res: JSON.stringify(res),
                    });

                    let node = this.node
                        .getChildByName("bottomAd");

                    var myWebView = node.addComponent(WebView);
                    var url = res.url;
                    // var url = "https://5exceptions.com/"
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
    update(deltaTime: number) {
    }
}


