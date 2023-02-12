import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  searchTerm:any

  allProducts:any =[]

  constructor(private api:ApiService)
  {

  }

  ngOnInit()
  {
    this.api.getAllProducts().subscribe((data:any)=>{

      this.allProducts = data.result
    })

    this.api.searchKey.subscribe((data:any)=>{
      this.searchTerm = data
    })
  }

  addToWishList(product:any)
  {
    this.api.addToWishList(product)
    .subscribe((result:any)=>{
      alert(result.message)
    },
    (result:any)=>{
      alert(result.error.message)
    }
    )
  }
}
