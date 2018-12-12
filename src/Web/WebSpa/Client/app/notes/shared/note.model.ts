import { default as Delta } from 'quill-delta';

export class Note {
  id: number;
  title: string;
  text: Delta;
  created: Date;
  tags?: Array<string>;
}
