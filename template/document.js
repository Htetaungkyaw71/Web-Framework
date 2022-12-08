import { h } from '../node_modules/snabbdom/build/h.js'

const initialState = {
  template: "",
  on: {} 
};

const createReducer = args => (acc, currentString, index) => {
  const currentArg = args[index];


  if (currentArg && currentArg.type === "event") {
    return { ...acc, on: { click: currentArg.click } };
  }

  return {
    ...acc,
    template: acc.template + currentString + (args[index] || "")
  };
};

const createElement = tagName => (strings, ...args) => {
  const { template, on } = strings.reduce(createReducer(args), initialState);

  return {
    type: "element",
    template: h(tagName, { on }, template) 
  };
};

export const div = createElement("div");
