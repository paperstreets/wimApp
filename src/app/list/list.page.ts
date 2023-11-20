import { Component, OnInit } from '@angular/core';
import { WimDataService } from '../wimdata.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

  export class ListPage implements OnInit {
    wimList: any[] = [];
    sortOption: string = 'default';

    constructor(private wimDataService: WimDataService) { }


    ngOnInit() {
      // Fetch the data for the table from the API or any other source
      this.fetchWimList();
    }

    fetchWimList() {
      // Make an API call or fetch the data from any other source
      // Replace the following code with your actual implementation
      const apiResponse = [
        { name: 'WIM01', wim: 1, route: 'M-06', status: 'Normal', lat: 50.4523, lng: 30.1936},
        { name: 'WIM02', wim: 2, route: 'M-06', status: 'Normal', lat: 50.4248, lng: 29.4656},
        { name: 'WIM03', wim: 3, route: 'M-03', status: 'Normal', lat: 48.3794, lng: 31.1656},
        { name: 'WIM04', wim: 4, route: 'M-05', status: 'Normal', lat: 48.3794, lng: 31.1656},
        { name: 'WIM05', wim: 5, route: 'M-07', status: 'Problem', lat: 48.3794, lng: 31.1656},
        { name: 'WIM06', wim: 6, route: 'M-22', status: 'Normal', lat: 48.3794, lng: 31.1656},
        { name: 'WIM07', wim: 7, route: 'H-31', status: 'Problem',lat: 48.3794, lng: 31.1656},
        { name: 'WIM08', wim: 8, route: 'H-01', status: 'Normal', lat: 48.3794, lng: 31.1656},
        { name: 'WIM09', wim: 9, route: 'H-01', status: 'Problem', lat: 48.3794, lng: 31.1656},
        { name: 'WIM10', wim: 10, route: 'M-06', status: 'Normal', lat: 48.3794, lng: 31.1656},
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
      this.wimDataService.setWimList(this.wimList);
    }
    onSortOptionChange() {
      this.fetchWimList();
    }
  }
