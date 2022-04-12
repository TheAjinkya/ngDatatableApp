import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  users?: any[] = []

  getUsers() {
    this.userService.getData('https://jsonplaceholder.typicode.com/users')
      .subscribe((response:any) => {
        this.users = response
        console.log(this.users)
    })
  }

}
