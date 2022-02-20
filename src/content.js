import * as InboxSDK from "@inboxsdk/core";
import IFrame from "./IFrame";
import {
  IFRAME_SRC,
  IFRAME_TITLE,
  BTN_TITLE,
  BTN_ICON,
  APP_ID,
  INBOXSDK_VERSION
} from "./constants";

InboxSDK.load(INBOXSDK_VERSION, APP_ID).then(sdk => {
  sdk.Compose.registerComposeViewHandler(composeView => {
    // Add button to the Compose View
    composeView.addButton({
      title: BTN_TITLE,
      iconUrl: BTN_ICON,
      onClick(event) {
        const { composeView, dropdown } = event;

        const iframe = new IFrame({
          source: IFRAME_SRC,
          title: IFRAME_TITLE,
          composeView,
          dropdown
        });

        event.dropdown.el.innerHTML = iframe.el;
        event.dropdown.buffer = 200;
      },
      hasDropdown: true
    });
  });
});
