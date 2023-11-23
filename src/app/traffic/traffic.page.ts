import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.page.html',
  styleUrls: ['./traffic.page.scss'],
})

export class TrafficPage implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    this.loadScript('https://public.tableau.com/javascripts/api/viz_v1.js');
  }

  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
