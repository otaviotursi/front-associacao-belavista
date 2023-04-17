import { Component, OnInit } from '@angular/core';
import { FeedBackService } from '../feed-back.service';

@Component({
  selector: 'app-nota-associacao',
  templateUrl: './nota-associacao.component.html',
  styleUrls: ['./nota-associacao.component.scss'],
})
export class NotaAssociacaoComponent implements OnInit {
  mediaNota = 10;
  constructor(private feedBackService: FeedBackService) {}

  ngOnInit(): void {
    this.SelecionarMediaFeedBack();
  }

  SelecionarMediaFeedBack() {
    this.feedBackService.BuscarMediaNotaAssociacao().subscribe((response) => {
      this.mediaNota = response;
    });
  }
}
