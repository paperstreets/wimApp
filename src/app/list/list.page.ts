import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

  export class ListPage implements OnInit {
    wimList: any[] = [];
    sortOption: string = 'default';

    constructor() { }

    ngOnInit() {
      // Fetch the data for the table from the API or any other source
      this.fetchWimList();
    }

    fetchWimList() {
      // Make an API call or fetch the data from any other source
      // Replace the following code with your actual implementation
      const apiResponse = [
        { name: 'WIM 01', wim: 10, route: 'Route 1', status: 'Problem' },
        { name: 'WIM 02', wim: 20, route: 'Route 2', status: 'Normal' },
        { name: 'WIM 03', wim: 30, route: 'Route 3', status: 'Problem' },
        { name: 'WIM 04', wim: 40, route: 'Route 4', status: 'Normal' },
        { name: 'WIM 05', wim: 50, route: 'Route 5', status: 'Problem' },
        { name: 'WIM 06', wim: 60, route: 'Route 6', status: 'Normal' },
        { name: 'WIM 07', wim: 70, route: 'Route 7', status: 'Problem' },
        { name: 'WIM 08', wim: 80, route: 'Route 8', status: 'Normal' },
        { name: 'WIM 09', wim: 90, route: 'Route 9', status: 'Problem' },
        { name: 'WIM 10', wim: 100, route: 'Route 10', status: 'Normal' },
      ];

      // Sort the data based on the selected sort option
      if (this.sortOption === 'default') {
        apiResponse.sort((a, b) => a.wim - b.wim);
      } else if (this.sortOption === 'problem') {
        apiResponse.sort((a, b) => {
          if (a.status === 'Problem' && b.status !== 'Problem') {
            return -1;
          } else if (a.status !== 'Problem' && b.status === 'Problem') {
            return 1;
          } else {
            return 0;
          }
        });
      }

      // Assign the sorted data to the wimList array
      this.wimList = apiResponse;
    }

    onSortOptionChange() {
      this.fetchWimList();
    }
  }
