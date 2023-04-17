import { _decorator, WebView, UITransform } from 'cc';
import { sdk } from "appylar-package-5ex";
export class AppylarScript {
    
    public topAdNode: any = null;
    public bottomAdNode: any = null;
    public Interstitial: any = null;
    public responseEditBox: any = null;
    public node: any = null;
    private appylarSdk: sdk = new sdk();

    constructor(node: any) {
        this.node = node;
        this.topAdNode = node
            .getChildByName("topAd");
        this.bottomAdNode = node
            .getChildByName("bottomAd");
        this.Interstitial = node
            .getChildByName("Interstitial");
        this.appylarSdk.emitter.on('Initialized', (payload: any) => {
            console.log(`Received message: ${payload}`);
        });
        this.appylarSdk.emitter.on('BannerShown', (payload: any) => {
            console.log(`Received message: ${payload.position}, ${payload.message}`);
            if (payload.position === 'top') {
                this.renderAd(this.topAdNode, payload.adData)
            } else if (payload.position === 'bottom') {
                this.renderAd(this.bottomAdNode, payload.adData)
            }
        })
    }

    renderAd(elementToBeShown, ad) {
        let myWebView = elementToBeShown.addComponent(WebView);
        const url = ad.url;
        const height = ad.ad.height;
        myWebView.url = url;
        const uiTransform = myWebView.getComponent(UITransform);
        uiTransform.setContentSize(900, height);
        uiTransform.setAnchorPoint(0.5, 0.5);
    }

    initializationFunction(apiKey: string) {
        const apiId = "";
        const width: number = 0;
        const height: number = 0;
        const density: number = 0;
        const orientations: any = ["landscape", "portrait"];
        const country = "IN";
        const language = "en";
        this.appylarSdk.init(width, density, height, country, language, apiId, apiKey, orientations)
            .then((res) => {
                return true;
            })
            .catch((error) => {
                return false;
            });
    }


    checkIfCanShowAd(type: any) {
        const response = this.appylarSdk.canShowAd(type);
        return (response) ? response : false;
    }

    showTopAd() {
        this.appylarSdk.showAd("banner", "top")
            .then((res) => {
                return true;
            })
            .catch((error) => {
                return false;
            });
    }

    showBottomAd() {
        this.appylarSdk.showAd("banner", "bottom")
            .then((res) => {
                return true;
            })
            .catch((error) => {
                return false;
            });
    }

    showInterstitial() {
        this.appylarSdk.showAd("interstitial", "")
            .then((res) => {
                let myWebView = this.Interstitial.addComponent(WebView);
                const url = res.url;
                myWebView.url = url;
                const uiTransform = myWebView.getComponent(UITransform);
                uiTransform.setContentSize(1000, 1100);
                uiTransform.setAnchorPoint(0.5, 0.5);
                return true;
            })
            .catch((error) => {
                return false;
            });
    }
}


