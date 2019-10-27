import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit() {
  }

  logout() {
    this.dataService.destroyData();
    this.router.navigate(['/login']);
  }

}
