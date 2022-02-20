import { EVT } from "./constants";
import { UUIDGeneratorBrowser } from "./utils";

class IFrame {
  constructor({ source = "", title = "", composeView, dropdown }) {
    this.source = source;
    this.title = title;
    this.composeView = composeView;
    this.dropdown = dropdown;

    this.initialize();
  }

  //========================================================================================
  /*                                                                                      *
   *                                    Initialization                                    *
   *                                                                                      */
  //========================================================================================

  initialize = () => {
    this.dropdown.on(EVT.DESTROY, this.onDropdownDestroy);

    window.addEventListener(EVT.MESSAGE, this.onMessage);
  };

  //========================================================================================
  /*                                                                                      *
   *                                  Getters and Setters                                 *
   *                                                                                      */
  //========================================================================================

  get authKey() {
    this._authKey = this._authKey ?? UUIDGeneratorBrowser();
    return this._authKey;
  }

  get el() {
    const { title, source, authKey } = this;
    const { subject, content } = this.getComposeData();

    const srcSubject = subject ? `&subject=${subject}` : "";
    const srcContent = content ? `&content=${content}` : "";
    const query = encodeURI(`authKey=${authKey}${srcSubject}${srcContent}`);
    const src = `${source}?${query}`;

    return `<iframe  src=${src} title=${title} frameBorder="0" height="300px"/>`;
  }

  getComposeData = () => {
    const { composeView } = this;

    return {
      subject: composeView.getSubject(),
      content: composeView.getHTMLContent()
    };
  };

  setBodyHTML = evt => {
    this.composeView.setBodyHTML(evt.data.content);
  };

  //========================================================================================
  /*                                                                                      *
   *                                    Event Handlers                                    *
   *                                                                                      */
  //========================================================================================

  onMessage = evt => {
    if (evt.origin === this.source && evt.data?.authKey === this.authKey) {
      const allowedMethods = {
        setBodyHTML: this.setBodyHTML
      };

      (allowedMethods[evt.data.method] ?? (() => {}))(evt);
    }
  };

  onDropdownDestroy = () => {
    this.destroy();
  };

  //========================================================================================
  /*                                                                                      *
   *                                        Destroy                                       *
   *                                                                                      */
  //========================================================================================

  destroy = () => {
    window.removeEventListener(EVT.MESSAGE, this.onMessage);
  };
}

export default IFrame;
