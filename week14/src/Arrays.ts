function maxValue(nums: number[]): number {
  let maxValue = -1234445;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
    }
  }
  return maxValue;
}

let nm = maxValue([1, 2, 3, 4, 5, 6, 67, 7, 123]);

console.log(nm);

interface Address {
  city: string;
  pincode: string;
}

interface User00 {
  name: string;
  age: number;
  addresses: Address[];
}

let user000: User00 = {
  name: "Gyanaranjan Patra",
  age: 21,
  addresses: [],
};
 