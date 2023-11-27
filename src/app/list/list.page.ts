import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WimDataService } from '../wimdata.service';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  wimList: any[] = [];
  sortOption: string = 'default';

  constructor(private httpClient: HttpClient, private wimDataService: WimDataService) { }

  ngOnInit() {
    this.fetchWimList();
  }

  fetchWimList() {
    this.httpClient.get<any[]>('http://localhost:3000/wimList').subscribe({
      next: (apiResponse) => {
        this.sortWimList(apiResponse);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  onSortOptionChange() {
    this.fetchWimList();
  }

  onStatusChange(newStatus: string, itemId: number) {
    // Find the item in the local array
    const item = this.wimList.find((wim) => wim["Номер майданчику WIM"] === itemId);

    if (item) {
      // Update the status in the local array
      item["Статус роботи"] = newStatus;

      // Update the status on the server
      this.httpClient.patch(`http://localhost:3000/wimList/${itemId}`, { "Статус роботи": newStatus })
        .subscribe({
          next: (response) => {
            console.log('Status updated successfully:', response);
          },
          error: (error) => {
            console.error('Error updating status:', error);
          },
        });

      // Update the status in the data service
      this.wimDataService.setWimList(this.wimList);
    } else {
      console.error('Item not found:', itemId);
    }
  }

  private sortWimList(list: any[]) {
    if (this.sortOption === 'default') {
      list.sort((a, b) => a["Номер майданчику WIM"] - b["Номер майданчику WIM"]);
    } else if (this.sortOption === 'problem') {
      list.sort((a, b) => {
        if (a["Статус роботи"] === 'Problem' && b["Статус роботи"] !== 'Problem') {
          return -1;
        } else if (a["Статус роботи"] !== 'Problem' && b["Статус роботи"] === 'Problem') {
          return 1;
        } else {
          return 0;
        }
      });
    }

    this.wimList = list;
    this.wimDataService.setWimList(this.wimList);
  }
    // Метод для збереження таблиці як зображення PNG

  saveAsImage() {
    const element = document.getElementById('wimStatus'); // Замініть 'yourTableId' на ідентифікатор вашої таблиці
    if (element) {
      html2canvas(element).then((canvas) => {
        // Преобразуйте canvas в blob
        canvas.toBlob((blob) => {
          if (blob) {
            // Використовуйте file-saver для збереження файлу
            saveAs(blob, 'table.png');
          } else {
            console.error('Error creating blob.');
          }
        });
      });
    }
  }

  
}
