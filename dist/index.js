let a = "cat";
a = "dog";
a = "bird";
a = "horse"; //오류
//Animal 타입으로 정의한 것 이외에는 절대 값이 존재하면 안됨
//위의 문장을 어노테이션으로 타입을 표현하고 싶다.
function say(who) {
    if (who === "cat") {
        return "고양이";
    }
    else if (who === "dog") {
        return "강아지";
    }
    else if (who === "bird") {
        return "새";
    }
    else {
        //이 곳까지 코드가 흘러오면 안됨!
        //return "알 수 없음";
        const no = who;
        throw new Error(`타입에 정의안됨 : ${no}`);
    }
}
say("horse");
export {};
