import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, ViewChild, } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface EmplyeeElement {
  id: number;
  name: string;
  department: String;
  joining_date: String;


}




const candidate_data: EmplyeeElement[] = [
  { "id": 11, "name": "Ash", "department": "HR", "joining_date": "2016/8/10" },
  { "id": 12, "name": "John", "department": "HR", "joining_date": "2011/18/1" },
  { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "2019/11/28" },
  { "id": 14, "name": "Vish", "department": "Development", "joining_date": "2017/7/7" },
  { "id": 15, "name": "Barry", "department": "Operations", "joining_date": "2014/8/19" },
  { "id": 16, "name": "Ady", "department": "Finance", "joining_date": "2014/5/10" },
  { "id": 17, "name": "Gare", "department": "Development", "joining_date": "2014/6/4" },
  { "id": 18, "name": "Hola", "department": "Development", "joining_date": "2010/8/12" },
  { "id": 19, "name": "Ola", "department": "HR", "joining_date": "2011/7/5" },
  { "id": 20, "name": "Kim", "department": "Finance", "joining_date": "2010/10/20" }
]



@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.scss']
})
export class EmployeeComponentComponent implements OnInit {



  displayedColumns: string[] = ['id', 'name', 'department', 'joining_date'];
  dataSource = new MatTableDataSource(candidate_data);

  @ViewChild(MatSort, { static: false }) sort: MatSort;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  constructor() { }



  ngOnInit() {
  }

}
