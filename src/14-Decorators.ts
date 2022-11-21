// "experimentalDecorators": true,  in tscoonfig.json
/*function Logger(constructor: Function) {
  console.log("Loggin...");
  console.log(constructor);
}*/

function Logger(logString: string) {
  return function(constructor: Function){
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) { // Decorator factoty
  return (constructor: any) => {
    const hookelement = document.getElementById(hookId);
    const p = new constructor();
    if (hookelement) {
      hookelement.innerHTML = template;      
    }
  }
}

@Logger('Logging - Person') // You must commeny @WithTemplate
// @WithTemplate('<h1>Hello World!</h1>', 'app-test') // This decorator will run first
class Person {
  name = "Alec";

  constructor() {
    console.log('Creating person object...')
  }  
}  

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator')
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) { // Get and Set
  console.log('Accessor Decorator!')
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) { // Method Decorator
  console.log('Method Decorator!')
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) { // Params decorator
  console.log('Params Decorator!')
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(value: number){
    if(value> 0){
      this._price = value;
    } else {
      throw new Error('Invalid price - Should be a positive value!')
    }
  }

  constructor(t: string, p:number){
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }

}


