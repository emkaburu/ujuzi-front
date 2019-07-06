import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { CropsService } from '../../services/crops.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CropsComponent } from '../crops/crops.component';

@Component({
    selector: 'edit-crop-component',
    templateUrl: './edit-crop-modal.component.html',
    exportAs: 'EditCropModal',
    styleUrls: ['./modals-css.scss']
})

export class EditCropModalComponent implements OnInit{

    request_feedback: any;
    cropForm: FormGroup;
    categories: any = [];
    crop_data: any;

    constructor(
        public cropsService: CropsService,
        public thisDialogRef: MatDialogRef<EditCropModalComponent>,
        public cropsComponentRef: CropsComponent,
        @Inject(MAT_DIALOG_DATA) public modalData: any,
    ){}

    ngOnInit(): void {
        this.crop_data = this.modalData.crop_data;
        this.categories = this.modalData.categories;

        this.cropForm = new FormGroup({
            c_name: new FormControl('', Validators.required),
            c_description: new FormControl('', Validators.required),
            c_categories: new FormControl('', Validators.required)
        })
    }

    onCloseCancel() {
        this.thisDialogRef.close();
    }

    onSubmit(values){
        /*let data : any = {};
        data = values;

        this.cropsService.createCrop(data);
        this.cropForm.reset();

        //When we come back from API, just reload table then close modal as below
        this.thisDialogRef.close(true);*/
        let data : any = {};

        data = values;

        this.cropsService.updateCrop(data)
            .subscribe(

                data  => {
                    this.request_feedback = data;
                },

                error  => {

                    console.log("CROP UPDATE ERROR: ", error);

                },
                () => {

                    this.cropForm.reset();
                    //When we come back from API, just reload table then close modal as below

                    this.cropsComponentRef.getCrops();
                    this.thisDialogRef.close(true);
                }

            );
    }

}
