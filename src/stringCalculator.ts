export function add(input: string): number {
    if(input === "") return 0;
    let numbers = input;
    let delimiter = /,|\n/; 

    if (input.startsWith("//")) {
        const parts = input.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }
    const nums = input.split(/,|\n/).map(Number);
    const negativeNumbers = nums.filter(n=>n<0).join(",");
    if(nums.some(n=>n<0)){
        throw new Error(`negative numbers not allowed ${negativeNumbers}`)
    }
    return nums.reduce((a,b)=> a+b, 0);
}

  