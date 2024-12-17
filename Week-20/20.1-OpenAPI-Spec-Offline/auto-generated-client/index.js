"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("./generated");
async function funcCall() {
    const res = await generated_1.DefaultService.getUser("1235");
    console.log(res);
}
funcCall();
