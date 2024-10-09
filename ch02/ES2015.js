//const, let
// const a = 0;
// a = 1;

// let b = 0;
// b = 1;

// const c;

//template string
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + " 더하기 " + num2 + "는 '" + result + "'";

// console.log(string1);

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 ${result2}`;

// console.log(string2);

// object literal
var sayNode = function () {
  console.log("Node");
};

var es = "ES";

const newObject = {
  sayJS() {
    console.log("JS");
  },
  sayNode,
  [es + 6]: "Fantastic",
};
// newObject.sayNode();
// newObject.sayJS();
// console.log(newObject.es6);

// => function
function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => x + y;

function not1(x) {
  return !x;
}

const not2 = (x) => !x;

// struct putting
var candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};
const {
  getCandy,
  status: { count },
} = candyMachine;

// class
class Human {
  constructor(type = "human") {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    alert("h-a-a-a-m");
  }
}

class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero("human", "Zero", "Cho");
Human.isHuman(newZero);

// promise
const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("success");
  } else {
    reject("failed");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("무조건");
  });

// new promise
function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = "zero";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "m" });
    })
    .then((user) => {})
    .catch((err) => {
      console.error(err);
    });
}

// async/await +) try/catch
async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
  } catch (error) {
    console.error(error);
  }
}

// +) =>function
const findAndSaveUser = async (Users) => {
  try {
    let user = await Users.findOne({});
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
  } catch (error) {
    console.error(error);
  }
};

// map, set
const m = new Map();

m.set("a", "b");
m.set(3, "c");
// const d = {};
m.set(d, "e");

m.get(d);
console.log(m.get(d));

m.size;
console.log(m.size);

for (const [k, v] of m) {
  console.log(k, v);
}

m.forEach((k, v) => {
  console.log(k.v);
});

m.has(d);
console.log(m.has(d));

m.delete(d);
m.clear();
console.log(m.size);

// set

// const s = new Set();
s.add(false);
s.add(1);
s.add("1");
s.add(1);
s.add(2);

console.log(s.size);

s.has(1);
console.log(s.has(1));

for (const a of s) {
  console.log(a);
}

s.forEach((a) => {
  console.log(a);
});

s.delete(2);
s.clear();

// 배열에서 중복 제거하고 싶을 때 set
const arr = [1, 2, 3, 4, 2, 1, 5, 6, 6];

const s = new Set(arr);
const reault = Array.from(s); //원래 배열로 다시 되돌림
console.log(result);

//널 병합, 옵셔널 체이닝
// const a= 0;
const b = a || 3; // ||연산자는 falsy 값이면 뒤로 넘어감
console.log(b); //3

// const c = 0;
const d = c ?? 3; // ??연산자는 nul 과 undefined일 때만 뒤로 넘어감
console.log(d); // 0

const e = null;
const f = e ?? 3;
console.log(f); //3

const g = undefined;
const h = g ?? 3;
console.log(h); //3

const a = {};
a.b;

const c = null;
try {
  c.d;
} catch (e) {
  console.error(e);
}
c?.d;

try {
  c.f();
} catch (e) {
  console.error(e);
}
c?.f();

try {
  c[0];
} catch (e) {
  console.error(e);
}
