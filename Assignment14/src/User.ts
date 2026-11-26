import type { NoteBook } from "./NoteBook";

export class User {
  protected id: number;
  public name: string;
  public email: string;
  private password: string;
  public phone: string;
  private age: number;
  private notebooks: NoteBook[] = [];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number
  ) {
    if (age < 18 || age > 60) {
      throw new Error("Age must be between 18 and 60");
    }
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.age = age;
  }

  displayInfo(): void {
    console.log(`Id: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Age: ${this.age}`);
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  addNotebook(notebook: NoteBook): void {
    if (!this.notebooks.includes(notebook)) {
      this.notebooks.push(notebook);
    }
  }

  removeNotebook(id: number): boolean {
    const index = this.notebooks.findIndex((notebook) => notebook.id === id);
    if (index === -1) return false;
    this.notebooks.splice(index, 1);
    return true;
  }

  getNotebooks(): NoteBook[] {
    return [...this.notebooks];
  }
}
