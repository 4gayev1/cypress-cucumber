export class Elements {
  static elementsMap = {};

  static addElements(elements) {
    this.elementsMap = { ...this.elementsMap, ...elements };
  }

  static getElement(element) {
    const selector = this.elementsMap[element].selector;
    const waitTime = this.elementsMap[element].waitTime * 1000 || 0;
    return cy.get(selector).wait(waitTime);
  }
}

export const getElement = Elements.getElement.bind(Elements);
export const addElements = Elements.addElements.bind(Elements);
