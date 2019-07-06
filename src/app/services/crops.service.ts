import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { SharedModule } from '../shared/shared.module';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'my-auth-token'
        'Allow-Origin': '*',
        'Access-Control-Allow-Origin': '*'
    })
};

// const baseUrl = "http://ujuzi.dev/api/";
const baseUrl = "http://localhost:8080/api/";

@Injectable({
  providedIn: 'root'
})

export class CropsService {

    //Static data for API local tests
    crops_data      = '../../assets/all-crops-data.json';
    crop_data       = '../../assets/single-crop-data.json';
    categories_data = '../../assets/all-categories-data.json';

    constructor(private httpClient: HttpClient) { }

    getCrops()  {

        return this.httpClient.get<any>(baseUrl+'crops?expand=cropCategory');

    }

    getCrop(crop_id)  {
        return this.httpClient.get<any>(baseUrl+'crops/'+crop_id+'?expand=cropCategory');

    }

    deleteCrop(crop_id)  {
        let del_url = baseUrl+'crops/'+crop_id;

        return this.httpClient.delete(del_url, httpOptions);

    }

    createCrop(values){
        //Process values here to conform to API required POST body
        let post_data = {
            "name"        : values.c_name,
            "description" : values.c_description,
            "category"    : values.c_category
        };

        let body_params = JSON.stringify(post_data);

        return this.httpClient.post(baseUrl+"crops", post_data, httpOptions);

    }


    updateCrop(values){
        //Process values here to conform

        // this.httpClient.put(baseUrl+"crops", values);
        //Process values here to conform to API required POST body
        let post_data = {
            "name"        : values.c_name,
            "description" : values.c_description,
            "category"    : values.c_category
        };

        let body_params = JSON.stringify(post_data);

        return this.httpClient.put(baseUrl+"crops", post_data, httpOptions);
    }


    getCategories() {
        return this.httpClient.get<any>(baseUrl+'categories');
    }

}

