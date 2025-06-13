export function add(input: string): number {
    if(input === "") return 0;
    const nums = input.split(",").map(Number)
    const negativeNumbers = nums.filter(n=>n<0).join(",");
    if(nums.some(n=>n<0)){
        throw new Error(`negative numbers not allowed ${negativeNumbers}`)
    }
    return nums.reduce((a,b)=> a+b, 0);
}

  