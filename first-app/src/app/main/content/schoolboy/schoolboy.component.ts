import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schoolboy',
  templateUrl: './schoolboy.component.html',
  styleUrls: ['./schoolboy.component.css']
})
export class SchoolboyComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Максим', 'Ольга', 'Ирина', 'Артем', 'Сергей', 'Тарас', 'Инга', 'Дарья', 'Леха', 'Стас'];
  }

  ngOnInit() {
  }

}
