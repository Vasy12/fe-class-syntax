'use strict';




/**
 * Button
 */
class Button {
  /*
   * common button logic
   * */
}

class AndroidButton extends Button {
  /*
   * android button specific logic
   * */
}

class IOSButton extends Button {}

/**
 * Input
 */
class Input {
  /*
   * common input logic
   * */
}

class AndroidInput extends Input {}

class IOSInput extends Input {}

/**
 * List
 */
class List {}

class AndroidList extends List {}

class IOSList extends List {}

/**
 * UI
 */

class UIFactory {
  /**
   * @returns {Button}
   */
  createButton() {

  }

  /**
   * @returns {Input}
   */
  createInput() {}

  /**
   * @returns {List}
   */
  createList() {}

}

class IOSUIFactory extends UIFactory {
  createButton() {
    return new IOSButton();
  }

  createInput() {
    return new IOSInput();
  }

  createList() {
    return new IOSList();
  }
}

class AndroidUIFactory extends UIFactory {
  /**
   *
   * @returns {Button}
   */
  createButton() {
    return new AndroidButton();
  }

  /**
   *
   * @returns {Input}
   */
  createInput() {
    return new AndroidInput();
  }

  /**
   *
   * @returns {List}
   */
  createList() {
    return new AndroidList();
  }
}

class WindowsPhoneUIFactory extends UIFactory {}

class App {

  render(platform) {

    this._uiFactory = new UIFactory();

    switch (platform) {
      case 'ios':
        this._uiFactory = new IOSUIFactory();
        break;
      case 'android':
        this._uiFactory = new AndroidUIFactory();
        break;
      case 'window':
        this._uiFactory = new WindowsPhoneUIFactory();
    }

  }

  displayLoginButton() {
    const button = this._uiFactory.createButton();

    /**
     *
     * */
  }

}
