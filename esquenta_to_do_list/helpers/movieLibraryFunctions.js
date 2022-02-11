function createCardElement(tag) {
  return document.createElement(tag);
}

function appendCardElement(fatherElement, childElement) {
  fatherElement.appendChild(childElement);
}

function addTextToProperty(element, property, text) {
  element[property] = text;
}

function addClassesToElement(element, classes) {
  for (let cssClass of classes) {
    element.classList.add(cssClass);
  }
}

function createAppendAndSetElement(tag, fatherElement, property, text, arrayOfClasses) {
  const childElement = createCardElement(tag);
  addTextToProperty(childElement, property, text);
  addClassesToElement(childElement, arrayOfClasses);
  appendCardElement(fatherElement, childElement);
}