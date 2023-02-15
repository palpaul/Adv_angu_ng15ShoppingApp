import { AuthService } from "./auth.service"

describe("unit testing of Auth service",()=>{

    let svc: AuthService |null

    beforeEach(()=>{
        svc = new AuthService
    })

    afterEach(()=>{
        svc = null
    })


    // validate USer method in service class

    it("should verfy admin credential", ()=>{
        expect(svc?.validateUser("admin","admin")).toBeTruthy
    })

    it("should verify non-admin credentials", ()=>{
        expect(svc?.validateUser("satya","admin")).toBeTruthy
    })
    })