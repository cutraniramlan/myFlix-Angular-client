import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const API_URL = 'https://movie-api-rani-1.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
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

  // Making the api call for the user registration endpoint
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
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
    'Something bad happened; please try again later.');
  }


getAllMovies(): Observable<any> {
  const token = localStorage.getItem('token');
  return this.http.get(API_URL + 'movies', {headers: new HttpHeaders(
    {
      Authorization: 'Bearer ' + token,
    })}).pipe(
    map(this.extractResponseData),
    catchError(this.handleError)
    );
}

getSingleMovie(title: string): Observable<any> {
  const token = localStorage.getItem('token');
  return this.http
    .get(`${API_URL}movies/${title}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
}

getDirector(directorName: string): Observable<any> {
  const token = localStorage.getItem('token');
  return this.http
    .get(`${API_URL}movies/directors/${directorName}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
}

getGenre(genreName: string): Observable<any> {
  const token = localStorage.getItem('token');
  return this.http
    .get(`${API_URL}movies/genre/${genreName}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
}

getUser(): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http
    .get(`${API_URL}users/${username}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
}

getFavoriteMovies(): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http
    .get(`${API_URL}users/${username}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(
      map(this.extractResponseData),
      map((data) => data.favoriteMovies),
      catchError(this.handleError)
    );
}

addFavoriteMovie(movieId: string): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http
    .post(`${API_URL}users/${username}/movies/${movieId}`,
      { favoriteMovie: movieId }, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
}

updateUser(updatedUser: any): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http
    .put(`${API_URL}users/${username}`, updatedUser, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
}

deleteUser(): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http
    .delete(`${API_URL}users/${username}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
}

removeFavoriteMovie(movieId: string): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http
    .delete(`${API_URL}users/${username}/movies/${movieId}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
}

// Non-typed response extraction
private extractResponseData(res: Response): any {
  const body = res;
  return body || { };
}

};