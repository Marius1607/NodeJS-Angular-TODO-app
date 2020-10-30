import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() public itemList = [];
  public editText : string = "";
  @Output() public deleteItem = new EventEmitter<number>();
  @Output () public editItem = new EventEmitter<any>();

  constructor() { }

   public onDeleteItem(itemId: number): void {
     this.deleteItem.emit(itemId); // emitem un eveniment care contine id-ul itemului ce il vom sterge
    }

   public onEditItem(itemId: number): void{
     console.log(itemId);
     var toEmit = {
       itemId: itemId,
       editText: this.editText
     };
     console.log(toEmit);
     this.editItem.emit(toEmit);
   }
}
