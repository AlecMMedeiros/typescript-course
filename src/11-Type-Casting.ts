// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement; // or this

userInputElement.value = "Hello World!";

interface IErrorList { // Index property
  [prop:string]: string;
}

const getErrors = <IErrorList> { // Another type casting
  404: 'Page Not Found',
  403: 'Forbidden',
  200: 'Ok',
}