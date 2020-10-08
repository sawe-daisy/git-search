import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;

  @Output() searchUser = new EventEmitter<any>();

  performSearch(){
    this.searchUser.emit(this.searchTerm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
