import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { items } from './items';


@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.scss']
})

export class ItemslistComponent implements OnInit {
  Items: items = {
    id: 1,
    name: ''
  };
  

  constructor() { }

  ngOnInit(): void {
  }

}
