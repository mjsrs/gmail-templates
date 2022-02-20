import { useCallback } from "react";
import { TARGET_ORG } from "../constants";

/**
 * Implements communication with the parent window using postMessage
 * @returns { sendMessage }
 */
const usePostMessage = authKey => {
  /**
   * Send a message to the parent window
   * @param {object} data : The data to send
   */
  const sendMessage = useCallback(
    data => {
      const payload = { ...data, authKey };
      window.parent.postMessage(payload, TARGET_ORG);
    },
    [authKey]
  );

  return { sendMessage };
};

export default usePostMessage;
