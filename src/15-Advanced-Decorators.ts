function WithTemplate2(template: string, hookId: string) {
  // Decorator factoty
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    {
      return class extends originalConstructor {
        constructor(..._: any[]) {
          super();
          const hookelement = document.getElementById(hookId);
          if (hookelement) {
            hookelement.innerHTML = template;
            hookelement.querySelector('h1')!.textContent = this.name;
          }
        }
      };
    }
  };
}

@WithTemplate2('<h1>Hello World!</h1>', 'app-test')
class User {
  name = "Alec";

  constructor() {
    console.log("Creating person object...");
  }
}

function Autobind (_target: any, _methodName: string, descriptor: PropertyDescriptor){
  const originalDescriptor = descriptor.value;
  const adjustDescriptor: PropertyDescriptor = {
    get() {
      const boundFN = originalDescriptor.bind(this);
      return boundFN;
    }
  }
  return adjustDescriptor;
}

class Printer {
  private _message = 'Autobind Works!';

  @Autobind
  showMessage(){
    console.log(this._message)
  }
}

const newAction = new Printer();

const button = document.querySelector('button')!;

button.addEventListener('click', newAction.showMessage)