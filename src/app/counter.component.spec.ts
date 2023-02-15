import {TestBed} from "@angular/core/testing"
import { CounterComponent } from "./counter.component"
describe("Unit testing of counter component" , ()=>{

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[CounterComponent]
        })
    })

    it("It should create an Instance of countercomponet ",()=>{
    let fixture = TestBed.createComponent(CounterComponent)
    expect(fixture).toBeDefined
    })

    it("Should verify data member value", ()=>{
        let fixture = TestBed.createComponent(CounterComponent)
        let obj = fixture.componentInstance
        expect(obj.count).toEqual(10)

    })

})