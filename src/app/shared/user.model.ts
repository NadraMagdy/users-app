import { v4 as uuidv4 } from 'uuid';

export class User {
  id: string;

  constructor(
    public imagePath: string,
    public name: string,
    public code: string
  ) {
    this.id = uuidv4();
  }
}
