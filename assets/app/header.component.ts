import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <div class="row">
        <div class="col-md-10 col-md-push-1">
        <div class="head-block">
        <h1 class="logo"><a href="#">Woman's Calendar</a></h1>
            <div class="avatar"><img src="images/no-avatar.png" alt="Logo" />
        <div class="user-sign">Привет, <strong>adminka</strong></div>
        </div>
        </div>
        </div>
        </div>
    `
})

export class HeaderComponent {

}