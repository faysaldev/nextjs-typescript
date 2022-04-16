let all_producat: object[] = [];
let total_price: (all_producat: any[]) => number;
type producat = {
  producat__id: number;
  title: string;
  unit_price: number;
  diccount: string;
};

enum producat1 {
  producat__id = 1,
  title = "pen",
  unit_price = 100,
  diccount = 10,
}
enum producat2 {
  producat__id = 1,
  title = "pen",
  unit_price = 100,
  diccount = 40,
}
enum producat3 {
  producat__id = 1,
  title = "pen",
  unit_price = 100,
  diccount = 50,
}

all_producat.push(producat1);
all_producat.push(producat2);
all_producat.push(producat3);

total_price = (all_producat: any[]) => {
  let price = 0;
  all_producat.map(function (item: producat) {
    const diccount = Number(item.diccount) * (item.unit_price / 100);
    price = price + (item.unit_price - diccount);
  });
  return price;
};

console.log(total_price(all_producat));
