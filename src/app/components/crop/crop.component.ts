import { Component, OnInit } from '@angular/core';
import { CropsService } from '../../services/crops.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {
    crop$: any;
    theCropId: Number;

    constructor(private cropsService: CropsService, private route: ActivatedRoute) {

    }

    ngOnInit() {

        //Subscribe for changes in route parameters
        this.route.params.subscribe(params => {

            this.theCropId = params.uid;
        });

        this.getCrop(this.theCropId);
    }

    getCrop(theCropId){
        this.cropsService.getCrop(theCropId)
            .subscribe(
                data => {
                    this.crop$ = data;
                },
                error => {
                    console.log("CROP GET ERROR: ");
                    console.log(error);
                },
                ()=> {

                }
            )
    }

}
