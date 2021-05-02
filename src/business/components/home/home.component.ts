import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TypingPage } from 'src/business/pages/typing/typing.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {}

  public openDialog() {
    const dialogRef = this.dialog.open(TypingPage);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
