import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-ng-datatable',
  templateUrl: './ng-datatable.component.html',
  styleUrls: ['./ng-datatable.component.scss']
})
export class NgDatatableComponent implements OnInit {

  constructor(private userservice: UserService) {
  }

  dtOptions: DataTables.Settings = {}
  dtTriggers: Subject<any> = new Subject<any>()
  allusers: any[] = []
  displayTable: boolean = false;

  ngAfterViewInit(): void {
    this.dtTriggers.next();
  }

  ngOnInit(): void {

    this.userservice.getData('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
      this.allusers = response
      this.dtOptions = response;
      this.dtTriggers.next()
      console.log(this.dtTriggers)
      this.displayTable = true
    })
  }

  ngOnDestroy() {
    this.dtTriggers.unsubscribe()
  }
}
