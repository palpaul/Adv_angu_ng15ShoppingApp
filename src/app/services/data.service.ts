import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

 
  //get
  readData(urlf:string){
    return this.http.get(urlf)
  }
  //post
  createData(url:string , newData:any){
    return this.http.post(url,newData)

  }
  //update
  updateData(url:string, modifiedData:any){
    return this.http.put(url+"/"+modifiedData.id,modifiedData)

  }
  //delete
  deleteData(url:string, id:number){
    return this.http.delete(url+"/"+id)
  }

}
