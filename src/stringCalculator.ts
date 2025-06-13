export function add(input: string): number {
    if(input === "") return 0;
    let numbers = input;
    let delimiter = /,|\n/; 

    if (input.startsWith("//")) {
        const delimiterPart = input.match(/^\/\/(\[.*\])\n/);
        if (delimiterPart) {
          const raw = delimiterPart[1];
          const delimiters = [...raw.matchAll(/\[(.*?)\]/g)].map(m => m[1]);
          delimiter = new RegExp(delimiters.map(d => escapeRegExp(d)).join("|"));
          numbers = input.split("\n").slice(1).join("\n"); 
        } else {
          delimiter = new RegExp(input[2]);
          numbers = input.split("\n")[1];
        }
      }
    const nums = numbers.split(delimiter).map(Number).filter(n => n <= 1000);
    const negativeNumbers = nums.filter(n=>n<0).join(",");
    if(nums.some(n=>n<0)){
        throw new Error(`negative numbers not allowed ${negativeNumbers}`)
    }
    return nums.reduce((a,b)=> a+b, 0);
}

function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  