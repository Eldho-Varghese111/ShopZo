import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  searchKey = new BehaviorSubject('')

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('http://localhost:3000/all-products')
  }

  addToWishList(product: any) {
    const body = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    }

    return this.http.post('http://localhost:3000/add-to-wishlist', body)
  }

  getWishList()
  {
    return this.http.get('http://localhost:3000/get-wishlist')
  }

  deleteFromWList(id:any)
  {
    return this.http.delete('http://localhost:3000/delete-item-wishlist/'+id)
  }
}



