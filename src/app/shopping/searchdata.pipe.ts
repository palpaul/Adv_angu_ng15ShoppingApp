import {Pipe,PipeTransform} from "@angular/core"

@Pipe({

    name: "searchData"
})

export class SearchDataPipe implements PipeTransform{
//for searching 
    transform(input : any[], searchString:string,searchProp:string) {

        searchString = searchString.toLowerCase();
        if(searchString != undefined && searchProp != undefined && searchString != ""){
          // return input.filter((e)=>e[searchProp].indexOf(searchString) > -1 ) // it will also work  but case senstive
                       return input.filter(it=>{
            return it.name.toLowerCase().includes(searchString);
           })
        }else{
            return input
        }
    }
}