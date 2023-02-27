import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
// import { Observable } from 'rxjs/Rx'
import { Observable } from 'rxjs'
import * as glob from '../models/global';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class UsermasterService {
  constructor(private http: HttpClient, private toastr: ToastrService) {
  }
  public UserLogin(userId: string, userPassword: string): Observable<any> {
    try {
      return this.http.get(glob.apiUrl + "Login/User", { params: { UserId: userId, UserPassword: userPassword } })
        .pipe(map((response: any) => {
          return response.json();
        })
          // , catchError((error: Response) => {
          //   return "error"
          // })
        );
    }
    catch {
      var res: any = {
        code: 404,
        error: "connection error"
      };
      return res;

    }

  }
}
