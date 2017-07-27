import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {

  constructor(private http: Http) { }

  getList<T>(api: string, EntityClass?: any) {
    return this.http.get(api)
      .map((response: Response) => response.json().data)
      .map((lstData: any[]) => {
        return <T[]>(lstData.map(fd => EntityClass ? new EntityClass().toLocal(fd) : fd));
      })
      .catch(this.handleError.bind(this));
  }

  getById<T>(api: string, id: string | number, EntityClass?: any): Observable<T> {
    if (id) {
      api = `${api}/${id}`;
    }
    return this.http.get(api)
      .map((response: Response) => response.json().data)
      .map(fd => EntityClass ? new EntityClass().toLocal(fd) : fd)
      .catch(this.handleError.bind(this));
  }

  create(api: string, obj: any) {
    if (obj && obj.toRemote) {
      obj = obj.toRemote();
    }
    return this.http.post(api, obj)
      .map((response: Response) => response.json() ? response.json().data : null)
      .catch(this.handleError.bind(this));
  }

  update(api: string, id: string | number, obj: any) {
    if (obj && obj.toRemote) {
      obj = obj.toRemote();
    }
    if (id) {
      api = `${api}/${id}`;
    }
    return this.http.put(api, obj)
      .map((response: Response) => response.json() ? response.json().data : null)
      .catch(this.handleError.bind(this));
  }

  delete(api: string, id: string | number) {
    if (id) {
      api = `${api}/${id}`;
    }
    return this.http.delete(api)
      .map((response: Response) => response.json() ? response.json().data : null)
      .catch(this.handleError.bind(this));
  }

  private handleError(error) {
    console.log('error in base service', error);
    return Observable.throw(error);
  }
}
