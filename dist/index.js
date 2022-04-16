"use strict";
let all_producat = [];
let total_price;
var producat1;
(function (producat1) {
    producat1[producat1["producat__id"] = 1] = "producat__id";
    producat1["title"] = "pen";
    producat1[producat1["unit_price"] = 100] = "unit_price";
    producat1[producat1["diccount"] = 10] = "diccount";
})(producat1 || (producat1 = {}));
var producat2;
(function (producat2) {
    producat2[producat2["producat__id"] = 1] = "producat__id";
    producat2["title"] = "pen";
    producat2[producat2["unit_price"] = 100] = "unit_price";
    producat2[producat2["diccount"] = 40] = "diccount";
})(producat2 || (producat2 = {}));
var producat3;
(function (producat3) {
    producat3[producat3["producat__id"] = 1] = "producat__id";
    producat3["title"] = "pen";
    producat3[producat3["unit_price"] = 100] = "unit_price";
    producat3[producat3["diccount"] = 50] = "diccount";
})(producat3 || (producat3 = {}));
all_producat.push(producat1);
all_producat.push(producat2);
all_producat.push(producat3);
total_price = (all_producat) => {
    let price = 0;
    all_producat.map(function (item) {
        const diccount = Number(item.diccount) * (item.unit_price / 100);
        price = price + (item.unit_price - diccount);
    });
    return price;
};
console.log(total_price(all_producat));
