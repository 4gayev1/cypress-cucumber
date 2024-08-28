export default class Elements {
  static elementsMap = {};

  static addElements(elements) {
    this.elementsMap = { ...this.elementsMap, ...elements };
  }

  static getElement(key) {
    console.log(key)
    return this.elementsMap[key];
  }
}