import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropsComponent } from './components/crops/crops.component'
import { CropComponent } from './components/crop/crop.component'
import { CropCategoriesComponent } from './components/crop-categories/crop-categories.component'

const routes: Routes = [
    {
        path: '', // The crops page is the homepage of the application
        component: CropsComponent,
        /*resolve: { // a resolver will allow us to fetch the component's data before the route is activated
            data: CropsResolver
        }*/
    },

    {
        path: 'crop/:uid',
        component: CropComponent,
        /*resolve: {
            data: CropResolver
        }*/
    },

    {
        path: 'crop-categories',
        component: CropCategoriesComponent,
        /*resolve: {
            data: CategoriesResolver
        }*/
    },


];

@NgModule({
  declarations: [],
    imports: [
        RouterModule.forRoot(
            routes,
            // {onSameUrlNavigation: 'reload'}
            // {useHash: false}
        ),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
