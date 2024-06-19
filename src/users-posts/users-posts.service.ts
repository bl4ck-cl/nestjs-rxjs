import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Observable, catchError, forkJoin, from, map, of } from 'rxjs';
import { IPost, IUser, IUsersPosts } from './interface/jsonplaceholder-response.interface';


@Injectable()
export class UsersPostsService {
    constructor(private readonly _http: HttpService) { }
    getUserPost(): Observable<IUsersPosts> {

        const users$: Observable<IUser[]> = this.buildRequest('users');
        const posts$: Observable<IPost[]>= this.buildRequest('posts');

        return forkJoin({ users: users$, posts: posts$ }).pipe(
          map(({ users, posts }) => {
    
            const usersPosts = users.map((user: IUser) => {
              return {
                ...user,
                posts: posts.find((post: IPost ) => post.userId === user.id),
              }
            })
            return {
              usersPosts
            }
          })
        );
      }
    
    
      buildRequest(endpoint: string): Observable<IUser[] & IPost[]> {
        const baseUrl: string = 'https://jsonplaceholder.typicode.com';
        return from(axios.get<IUser[] | IPost[]>(baseUrl + `/${endpoint}`)).pipe(
          map(({ data }: AxiosResponse) => data),
          catchError((error: AxiosError) => of({ status: error.status, error: error.message, detail: `Error fetching ${endpoint}` })));
      }
}
