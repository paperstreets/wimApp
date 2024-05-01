import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis-ai',
  templateUrl: './analysis-ai.page.html',
  styleUrls: ['./analysis-ai.page.scss'],
})
export class AnalysisAIPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNewTab() {
    window.open('http://127.0.0.1:5000/', '_blank');
  }
}
