import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { LoadingService } from "src/app/servicos/loading.service";

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy{
    
    loading:boolean = false;
    loadingSubscription:Subscription;

    constructor(private loadingService:LoadingService) {}

    ngOnInit(): void {
        this.loadingSubscription = this.loadingService.loadingStatus.pipe(
        ).subscribe((value) => {
            this.loading = value;
        });
    }

    ngOnDestroy(): void {
        this.loadingSubscription.unsubscribe();
    }
    
}