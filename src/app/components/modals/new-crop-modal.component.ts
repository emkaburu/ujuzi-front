import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { CropsService } from '../../services/crops.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CropsComponent } from '../crops/crops.component';

@Component({
    selector: 'new-crop-component',
    templateUrl: './new-crop-modal.component.html',
    exportAs: 'NewCropModal',
    styleUrls: ['./modals-css.scss']
})

export class NewCropModalComponent implements OnInit{
    request_feedback: any;
    cropForm: FormGroup;
    categories: any = [];

    constructor(
        public cropsService: CropsService,
        public thisDialogRef: MatDialogRef<NewCropModalComponent>,
        public cropsComponentRef: CropsComponent,
        @Inject(MAT_DIALOG_DATA) public modalData: any,
    ){}

    ngOnInit(): void {
        this.categories = this.modalData.categories;

        this.cropForm = new FormGroup({
            c_name: new FormControl('', Validators.required),
            c_description: new FormControl('', Validators.required),
            c_category: new FormControl('', Validators.required)
        })
    }

    onCloseCancel() {
        this.thisDialogRef.close();
    }

    onSubmit(values){
        let data : any = {};

        data = values;

        this.cropsService.createCrop(data)
        .subscribe(

            data  => {
                this.request_feedback = data;
                this.cropsComponentRef.request_feedback = this.request_feedback.message;
                console.log("Request feedback: ");
                console.log(this.request_feedback);
            },

            error  => {

                console.log("CROP CREATION ERROR: ", error);

            },
            () => {

                this.cropForm.reset();
                //When we come back from API, just reload table then close modal as below
                window.location.reload();
                this.thisDialogRef.close(true);
            }

        );
    }

}
