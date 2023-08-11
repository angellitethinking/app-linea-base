import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.page.html',
  styleUrls: ['./list-home.page.scss'],
})
export class ListHomePage implements OnInit {

  info: any;
  itemsel: any;
  arr_desc: any;
  
  @ViewChild('contentlist') content: IonContent;
  @ViewChild('contentdetail') contentDetail: IonContent;
  
  constructor(
    public httpClient: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.httpClient.get("assets/mascotas-v1.json").subscribe((data:any)=>{
      this.info = data;
    });
  }

  openDetails(item:any){
    console.log(item);
    let navigationExtras: any = {
      queryParams: {
        data: JSON.stringify(item)
      }
    };
    this.router.navigate(['/details'], navigationExtras);
  }

  isModalOpen = false;

  setOpen(isOpen: boolean, item: any) {
    
    if (isOpen){
      this.arr_desc = item.desc_larga.split("&&");
      this.itemsel = item;
    }      
    // else{
    //   // this.itemsel = null;
    // }
      
    this.isModalOpen = isOpen;
    
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }

  scrollToTopDetail() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.contentDetail.scrollToTop(500);
  }

}
