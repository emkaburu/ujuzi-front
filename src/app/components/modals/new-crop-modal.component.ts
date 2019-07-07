import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { CropsService } from '../../services/crops.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {ActivatedRoute, RouterLink, Router} from '@angular/router';

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
        @Inject(MAT_DIALOG_DATA) public modalData: any,
        private router: Router
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

            },

            error  => {

                console.log("CROP CREATION ERROR: ", error);

            },
            () => {

                this.cropForm.reset();

                this.router.navigateByUrl('/crop/', {skipLocationChange: true}).then(()=>
                    this.router.navigate(["/"]));
                this.thisDialogRef.close(true);
            }

        );
    }

}
