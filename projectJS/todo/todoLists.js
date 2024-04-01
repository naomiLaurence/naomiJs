
export class TodoLists {
    array = []

    add(todoList) {
        this.array.push(todoList)
    }

    toggleFavorite(id) {
        const index = this.array.findIndex(c => c.id === id);
        this.array[index].favorite = !this.array[index].favorite
    }


    remove(id) {
        this.array = this.array.filter(c => c.id !== id);
    }
}