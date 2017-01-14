/**
 * Created by omeralper on 1/2/2017.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
@NgModule({
    imports: [
        RouterModule.forRoot([

            ],
            {useHash: true}
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}