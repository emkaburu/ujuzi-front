import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { CropsService } from '../../services/crops.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {ActivatedRoute, RouterLink, Router} from '@angular/router';

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
        @Inject(MAT_DIALOG_DATA) public modalData: any,
        private router: Router
    ){}

    ngOnInit(): void {
        this.crop_data = this.modalData.crop_data;
        this.categories = this.modalData.categories;

        this.cropForm = new FormGroup({

            c_uid: new FormControl(this.crop_data.uid),
            c_name: new FormControl(this.crop_data.name, Validators.required),
            c_description: new FormControl(this.crop_data.description),
            c_category: new FormControl(this.crop_data.category, Validators.required)
        })
    }

    onCloseCancel() {
        this.thisDialogRef.close();
    }

    onSubmit(values){
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

                    this.router.navigateByUrl('/crop/1', {skipLocationChange: true}).then(()=>
                        this.router.navigate(["/"]));
                    this.thisDialogRef.close(true);
                }

            );
    }

}
