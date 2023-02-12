import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {

  wishList: any
  eMsg: any

  constructor(private api: ApiService , private route:Router) {


  }

  ngOnInit() {
    this.api.getWishList().subscribe((data: any) => {
      this.wishList = data.result
      if(this.wishList.length==0){
        this.eMsg='empty'
      }
    },
      (data: any) => {
        this.eMsg = data.error.message
      }

    )
  }

  deleteFromWList(product:any)
  {
    this.api.deleteFromWList(product.id)
    .subscribe((result:any)=>{
      alert(result.message)
      this.route.navigateByUrl('products/wish-list')

    },
    (result:any)=>{
      alert(result.error.message)}
      
    )
  }
}
