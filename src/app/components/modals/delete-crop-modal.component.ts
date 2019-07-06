import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {CropsService} from '../../services/crops.service';
import { CropsComponent } from '../crops/crops.component';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
    selector: 'delete-crop-modal',
    templateUrl: 'delete-crop-modal.component.html',
    styleUrls: ['./modals-css.scss'],
    // providers: [CropsComponent]

})
export class DeleteCropModalComponent {
    request_feedback: any;

    constructor(
        public thisDialogRef: MatDialogRef<DeleteCropModalComponent>,
        public cropsComponentRef: CropsComponent,
        @Inject(MAT_DIALOG_DATA) public modalData: any,
        public cropsService: CropsService,
        private router: ActivatedRoute
    ){}

    onCloseConfirm() {

        this.cropsService.deleteCrop(this.modalData.cropId)
            .subscribe(

                data  => {
                    this.request_feedback = data;
                },

                error  => {

                    console.log("CROP DELETE ERROR: ", error);

                },
                () => {

                    //When we come back from API, just reload table then close modal as below
                    window.location.reload();

                    this.cropsComponentRef.ngOnInit();
                    this.thisDialogRef.close(true);
                }

            );


    }

    onCloseCancel() {
        this.thisDialogRef.close(false);
    }

}
