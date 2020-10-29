import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector: "todo-input",
    templateUrl : "./todo-input.component.html"
})
export class TodoInputComponent{
    public inputText : string = "";
    @Output() public addItem = new EventEmitter();
    @Output() public deleteItems = new EventEmitter();

    public onClickAdd(): void {
        this.addItem.emit(this.inputText);
        this.inputText = "";
    }

    public onDeleteAll(): void {
        this.deleteItems.emit();
       }



    // public deleteAll(): void{
        
    //   }

}
