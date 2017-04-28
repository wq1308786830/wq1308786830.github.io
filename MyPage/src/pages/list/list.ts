import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListService} from "../../services/list.service";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit{

  selectedItem: any;

  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.listService.getList().subscribe(list => {
      this.items = list;
    }, err => {
      console.log(err);
    });
  }

  itemTapped(event: any, item: any) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
