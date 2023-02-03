"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let object = {
        all: false, dog: false, cat: false, fish: false
    };
    if (activeMenu !== '') {
        object[activeMenu] = true;
    }
    return object;
};
exports.createMenuObject = createMenuObject;
