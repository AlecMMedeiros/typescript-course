import { Combinable } from "./03-unions-aliases";


function simpleCalculator (n1: string, n2: string ): string; // Function overload
function simpleCalculator (n1: number, n2: number ): number; // Function overload
function simpleCalculator (n1: Combinable, n2: Combinable ) { // Original function
    if(typeof n1 === 'string' || typeof n2 === 'string' ) {
      return n1.toString() + n2.toString()
    }
    return n1 + n2;
  };

  const result = simpleCalculator('Robert', 'Smith');
  result.split(' ')

  const userInfo = {
    id: 1,
    name: 'Alec',
    job: {title: "Admin", description: 'Admin of the system'}
  }
  
  console.log(userInfo?.job?.description) // optional chaining

  const nullValue = null;

  const getValue = nullValue ?? 'Default' // Nullish Coalescing

  console.log(getValue);

  