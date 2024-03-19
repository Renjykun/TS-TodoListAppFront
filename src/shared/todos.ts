namespace TodoTypes {
  export enum TodosType {
    Check,
    List,
    Completed,
  }

  export interface ITodos {
    getType(): TodosType;
    createAt(): Date;
    content(): string;
  }

  export type TodoDTO = {
    createAt: Date,
    by: string,
    at: Date,
    content: string
  }
}

abstract class SimpleTodo implements TodoTypes.ITodos {
  private m_content: string;
  private m_createdAt: Date;
  protected m_prefix: string;

  constructor(content: string, createAt: Date, prefix: string) {
    this.m_content = content;
    this.m_createdAt = createAt;
    this.m_prefix = "";
  }

  abstract getType(): TodoTypes.TodosType;

  createAt = () => this.m_createdAt;

  content = () => `${this.m_prefix} ${this.m_content}`;

  protected updatePrefix = (npref: string) => (this.m_prefix = npref);
}

class ListedTodo extends SimpleTodo {
  constructor(content: string, createAt: Date) {
    super(content, createAt, "-");
  }

  getType: () => TodoTypes.TodosType = () => TodoTypes.TodosType.List;
}

export { TodoTypes, ListedTodo, SimpleTodo };
