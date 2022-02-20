import templates from "./__mock__/templates";

/**
 * Implements a client to communicate with a REST API
 */
class Client {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * Returns a list with the available items
   * @returns {array}
   */
  loadItems = () => {
    return templates;
  };

  createItem = data => {
    return true;
  };

  readItem = id => {
    return {};
  };

  updateItem = data => {
    return true;
  };

  deleteItem = id => {
    return true;
  };
}

export default Client;
