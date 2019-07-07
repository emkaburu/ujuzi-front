import { Component, OnInit } from '@angular/core';
import { CropsService } from '../../services/crops.service'
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DeleteCropModalComponent } from '../modals/delete-crop-modal.component';
import { NewCropModalComponent } from '../modals/new-crop-modal.component';
import { EditCropModalComponent } from '../modals/edit-crop-modal.component';

@Component({
    selector: 'app-crops',
    templateUrl: './crops.component.html',
    styleUrls: ['./crops.component.css'],
    providers: []
})

export class CropsComponent implements OnInit {

    crops$: any = [];
    categories$: any = [];
    request_feedback: any;
    // cropObservable : Observable<Crop[]>;
    // cropObservable : Observable<any[]>;

    constructor(
        private cropsService: CropsService,
        public dialog: MatDialog) {

    }

    ngOnInit(){
        this.getCrops();
    }

    getCrops(){
        this.cropsService.getCrops()
         .subscribe(
             data => {
                 this.crops$ = data;

            },
            error => {
                console.log("DATA FETCH ERROR: ");
                console.log(error);
            },
            ()=> {

            }
        )
    }


    deleteCrop(cropId){
        let dialogRef = this.dialog.open(DeleteCropModalComponent, {
            data: { cropId: cropId }
        });

        // Implement after closed here

    }
    newCrop(){
        //Get categories from DB here
        this.cropsService.getCategories()
            .subscribe(
                data => {
                    this.categories$ = data;

                },
                error => {
                    console.log("CATEGORIES FETCH ERROR: ");
                    console.log(error);
                },
                ()=> {

                    //We open modal when data fetch is complete to ensure we get the categories to the modal for the dropdwon
                    let dialogRef = this.dialog.open(NewCropModalComponent, {
                        data: { categories: this.categories$.items }
                    });
                }
            );

        // Implement after closed here

    }

    editCrop(crop_id){
        //Get categories from DB here
        this.cropsService.getCategories()
            .subscribe(
                data => {

                    this.categories$ = data;

                },
                error => {
                    console.log("CATEGORIES FETCH ERROR: ");
                    console.log(error);
                },
                ()=> {


                }
            );

    //Do we get the crop details from API or do we pass from table?
    let crop_data: any;
    this.cropsService.getCrop(crop_id)
        .subscribe(
            data => {
                crop_data = data;

            },
            error => {
                console.log("CROP FETCH ERROR: ");
                console.log(error);
            },
            ()=> {

                //We open modal when data fetch is complete to ensure we get the categories to the modal for the dropdwon
                let dialogRef = this.dialog.open(EditCropModalComponent, {
                    data: { crop_data: crop_data, categories: this.categories$.items }
                });
            }
        );

    // Implement after closed here

    }

}


export interface Config {
    crops: string;
    categories: string;
}
