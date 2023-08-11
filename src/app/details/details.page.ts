import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data: any;
 
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["data"]);
      console.log(JSON.parse(params["data"]));
      // console.log(JSON.parse(params));
      // if (params && params.data) {
      //   this.data = JSON.parse(params.data);
      // }
    });
  }

  ngOnInit() {
  }

}
