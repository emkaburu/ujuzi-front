/**
 * Import Angular Libs
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


/**
 * Import self made modules
 */
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module'

/**
 * Import Components and Modals
 */
import { AppComponent } from './app.component';
import { CropCategoriesComponent } from './components/crop-categories/crop-categories.component';
import { CropCategoryComponent } from './components/crop-category/crop-category.component';
import { CropsComponent } from './components/crops/crops.component';
import { CropComponent } from './components/crop/crop.component';
import { DeleteCropModalComponent } from './components/modals/delete-crop-modal.component';
import { NewCropModalComponent } from './components/modals/new-crop-modal.component';
import { EditCropModalComponent } from './components/modals/edit-crop-modal.component';

/**
 * Import Services
 */
import { CropsService} from './services/crops.service';

@NgModule({

    declarations: [
        AppComponent,
        CropCategoriesComponent,
        CropCategoryComponent,
        CropsComponent,
        CropComponent,
        DeleteCropModalComponent,
        NewCropModalComponent,
        EditCropModalComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        DeleteCropModalComponent,
        NewCropModalComponent,
        EditCropModalComponent
    ],

    providers: [CropsService, CropsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
