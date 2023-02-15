import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {


//before each test case
let pipe:any

beforeEach(()=>{
   pipe = new ReversePipe();
})

  it('create an instance', () => {
   // const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });


  //writing one test case to check value is reverse or not

  it("Should verify reverse text ", () => {
    //const pipe = new ReversePipe()
    expect(pipe.transform("abcd")).toEqual("dcba")
  })

});
