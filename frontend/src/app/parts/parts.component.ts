import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Part } from '../models/Part';
import { PartService } from '../services/part.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  parts: Part[] = []
  errorMessage ?: string = undefined;
  constructor(private partService: PartService) { }

  async ngOnInit() {
    try {
      this.parts = await this.partService.getParts();

      if(this.parts.length === 0) {
        this.errorMessage = "Nincsenek alkatrészek az adatbázisban!"
      }
    } catch(err) {
      console.log(err);
      this.errorMessage = (err as HttpErrorResponse).error;
    }
  }

  deletePart(id: number) {
    console.log("DELETE:",id);
  }
}
