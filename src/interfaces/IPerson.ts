export default interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}
