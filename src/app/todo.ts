// dans cette classe on dit que chaque Todo aura aux moins 3 propriétés 
// un id un titre et complete qui determine si le todo est complété ou non

export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
// facilite l'instanciation pas obliger de parametrer tous les champs dans le constructor
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}