import { Component, Input } from '@angular/core';
import { TableRow } from '../../data/definitions';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input({ required: true }) tableData!: TableRow[];
}
