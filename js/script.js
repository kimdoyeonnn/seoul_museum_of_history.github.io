
document.addEventListener("DOMCountentLoaded", () => {
    const count = document.querySelectorAll(".counter");

    count.forEach((item, i) => {
        const countNum = item.textContent.replace(",", "").replace("건", "");
        let init = 1;

        let countAnim = setInterval(() => {
            if(countNum - init < 1000) {
                init = init +10;
                item.textContent = init + "건";
                if(init >= countNum) {
                    clearInterval(countAnim);
                }
            } else if(countNum - init < 100){
                init = init +1;
                item.textContent = init + "건";
                if(init >= countNum){
                    clearInterval(countAnim);
                }
            } else {
                init = init +100;
                item.textContent = init + "건";
                if(init >= countNum) {
                    clearInterval(countAnim);
                }
            }
        }, 1000 / countNum * 100);
    });
})

