import { Injectable } from '@angular/core'; // this just help with dependencies and the dependency injection. we wanna
// import this services into wherever we need .
import { Http,Headers } from '@angular/http';
// we need Http module to make http getrequest so we do http import here.
import 'rxjs/add/operator/map';
// we will be using observables with rxjs extension , we will return the responses in oservables
//on components and display the information.
// we will use map object with the observables.



@Injectable()
export class GithubService {
  private  username : string;
  private client_id = '0d7b13dcc16ace907475';
  private client_secret = '49a25a3173b79c105cdf5c2bf9a48926f8358cb5';

  constructor(private _http: Http) {
  console.log("Github service ready");
    this.username = "sandeepghimire";

  }
  getUser() {
    return this._http.get('http://api.github.com/users/'+this.username +'?client_id='+this.client_id + '&client_secret='+this
    .client_secret).map(res=>res.json());
    // here we are making get request . we use map fn coz we want this to be json. So res =>res.json. so now we return the
    //observables in the json format.
    // here we also just conctinate client id and client secret

  }

}
