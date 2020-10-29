import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() public itemList = [];
  @Output() public deleteItem = new EventEmitter<number>();

  constructor() { }

   public onDeleteItem(itemId: number): void {
     console.log(itemId);
     this.deleteItem.emit(itemId); // emitem un eveniment care contine id-ul itemului ce il vom sterge
    }

  //  public onClickEdit(itemId: number): void {
  //    //TODO
  //  }

}
