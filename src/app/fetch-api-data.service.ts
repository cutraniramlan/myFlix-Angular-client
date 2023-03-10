// import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { map } from 'rxjs/operators';



// //Declaring the api url that will provide data for the client app
// const API_URL = 'https://movie-api-rani-1.herokuapp.com/';
// @Injectable({
//   providedIn: 'root'
// })
// export class UserRegistrationService {
//   // Inject the HttpClient module to the constructor params
//  // This will provide HttpClient to the entire class, making it available via this.http
//   constructor(private http: HttpClient) {
//   }
//  // Making the api call for the user registration endpoint
//   public userRegistration(userDetails: any): Observable<any> {
//     console.log(userDetails);
//     return this.http.post(API_URL + 'users', userDetails).pipe(
//     catchError(this.handleError)
//     );
//   }

//   // Making the api call for the user registration endpoint
//   public userLogin(userDetails: any): Observable<any> {
//     console.log(userDetails);
//     return this.http.post(API_URL + 'users', userDetails).pipe(
//     catchError(this.handleError)
//     );
//   }

// private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//     console.error('Some error occurred:', error.error.message);
//     } else {
//     console.error(
//         `Error Status code ${error.status}, ` +
//         `Error body is: ${error.error}`);
//     }
//     return throwError(
//     'Something bad happened; please try again later.');
//   }


// getAllMovies(): Observable<any> {
//   const token = localStorage.getItem('token');
//   return this.http.get(API_URL + 'movies', {headers: new HttpHeaders(
//     {
//       Authorization: 'Bearer ' + token,
//     })}).pipe(
//     map(this.extractResponseData),
//     catchError(this.handleError)
//     );
// }

// getSingleMovie(title: string): Observable<any> {
//   const token = localStorage.getItem('token');
//   return this.http
//     .get(`${API_URL}movies/${title}`, {
//       headers: new HttpHeaders({
//         Authorization: 'Bearer ' + token,
//       }),
//     })
//     .pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
// }

// getDirector(directorName: string): Observable<any> {
//   const token = localStorage.getItem('token');
//   return this.http
//     .get(`${API_URL}movies/directors/${directorName}`, {
//       headers: new HttpHeaders({
//         Authorization: 'Bearer ' + token,
//       }),
//     })
//     .pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
// }

// getGenre(genreName: string): Observable<any> {
//   const token = localStorage.getItem('token');
//   return this.http
//     .get(`${API_URL}movies/genre/${genreName}`, {
//       headers: new HttpHeaders({
//         Authorization: 'Bearer ' + token,
//       }),
//     })
//     .pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
// }

// getUser(): Observable<any> {
//   const token = localStorage.getItem('token');
//   const username = localStorage.getItem('user');
//   return this.http
//     .get(`${API_URL}users/${username}`, {
//       headers: new HttpHeaders({
//         Authorization: 'Bearer ' + token,
//       }),
//     })
//     .pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
// }

// getFavoriteMovies(): Observable<any> {
//   const token = localStorage.getItem('token');
//   const username = localStorage.getItem('user');
//   return this.http
//     .get(`${API_URL}users/${username}`, {
//       headers: new HttpHeaders({
//         Authorization: 'Bearer ' + token,
//       }),
//     })
//     .pipe(
//       map(this.extractResponseData),
//       map((data) => data.favoriteMovies),
//       catchError(this.handleError)
//     );
// }

// addFavoriteMovie(movieId: string): Observable<any> {
//   const token = localStorage.getItem('token');
//   const username = localStorage.getItem('user');
//   return this.http
//     .post(`${API_URL}users/${username}/movies/${movieId}`,
//       { favoriteMovie: movieId }, {
//       headers: new HttpHeaders({
//         Authorization: 'Bearer ' + token,
//       }),
//     })
//     .pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
// }

// updateUser(updatedUser: any): Observable<any> {
//   const token = localStorage.getItem('token');
//   const username = localStorage.getItem('user');
//   return this.http
//     .put(`${API_URL}users/${username}`, updatedUser, {
//       headers: new HttpHeaders({
//         Authorization: 'Bearer ' + token,
//       }),
//     })
//     .pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
// }

// deleteUser(): Observable<any> {
//   const token = localStorage.getItem('token');
//   const username = localStorage.getItem('user');
//   return this.http
//     .delete(`${API_URL}users/${username}`, {
//       headers: new HttpHeaders({
//         Authorization: 'Bearer ' + token,
//       }),
//     })
//     .pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
// }

// removeFavoriteMovie(movieId: string): Observable<any> {
//   const token = localStorage.getItem('token');
//   const username = localStorage.getItem('user');
//   return this.http
//     .delete(`${API_URL}users/${username}/movies/${movieId}`, {
//       headers: new HttpHeaders({
//         Authorization: 'Bearer ' + token,
//       }),
//     })
//     .pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
// }

// // Non-typed response extraction
// private extractResponseData(res: Response): any {
//   const body = res;
//   return body || { };
// }

// };

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
//const apiUrl = 'https://myflix-movie-api.onrender.com/';
const apiUrl = 'https://movie-api-rani-1.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  // Making the api call for the login endpoint
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  //get all movies
  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  //get one movie
  public getMovie(Title: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `movies/${Title}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  //get director
  public getDirector(directorName: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `movies/director/${directorName}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  //get genre
  public getGenre(genreName: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `movies/genre/${genreName}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  //get user
  public getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.get(apiUrl + `users/${username}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  //get favorite movies
  public getFavorites(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.get(apiUrl + `users/${username}/movies`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  //add to favorite movies
  public addFavorite(movieID: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.post(apiUrl + `users/${username}/movies/${movieID}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  //edit user
  public editUser(editDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.put(apiUrl + `users/${username}`, editDetails, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  //delete user
  public deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.delete(apiUrl + `users/${username}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  //delete from favorite movies
  public deleteFavorite(movieID: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.delete(apiUrl + `users/${username}/movies/${movieID}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

// Non-typed response extraction
  private extractResponseData(res: any): any {
    const body = res;
    return body || { };
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened!! Please try again later!!');
  }
}