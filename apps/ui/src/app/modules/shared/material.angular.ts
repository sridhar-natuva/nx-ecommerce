import { NgModule } from '@angular/core';
// Angular material imports
import { CdkTableModule } from '@angular/cdk/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge';

const materialComponents = [
  MatCardModule,
  MatListModule,
  MatTableModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatInputModule,
  MatGridListModule,
  MatPaginatorModule,
  MatSortModule,
  // FlexLayoutModule,
  MatSelectModule,
  CdkTableModule,
  MatProgressSpinnerModule,
  ScrollingModule,
  MatSlideToggleModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTabsModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatRippleModule,
  MatRadioModule,
  MatBadgeModule
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})

export class MaterialModule { }
