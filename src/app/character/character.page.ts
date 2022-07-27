import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  item = [];
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      this.item = JSON.parse(params.data);
    });
  }

  ngOnInit() {}
}
