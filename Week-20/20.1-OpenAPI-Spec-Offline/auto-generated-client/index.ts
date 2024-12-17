import { DefaultService } from "./generated";

async function funcCall() {
    const res = await DefaultService.getUser("1235");
    console.log(res);
}

funcCall();