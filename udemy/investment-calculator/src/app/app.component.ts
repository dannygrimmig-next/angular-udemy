import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormData, TableRow, emptyForm } from '../data/definitions';
import { calculateInvestmentResults } from '../data/investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FormComponent, TableComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  form: FormData = emptyForm;

  tableData: TableRow[] = [];

  handleFormSubmit() {
    this.tableData = calculateInvestmentResults(this.form);
  }
}
