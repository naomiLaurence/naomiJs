export class TodoList {
    id;
    name;
    favorite = false;

    constructor(id, name, favorite = false) {
        this.id = id
        this.name = name
        favorite = false

    }

}