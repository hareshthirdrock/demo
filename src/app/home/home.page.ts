import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: false,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 10,
  };

  dataList = [];
  allDataList = [];
  fetchRes = fetch('https://breakingbadapi.com/api/characters');
  appearance = [1, 2, 3, 4, 5];
  selectedAppearance = 1;
  isSearchStart = false;
  searchedText;
  constructor(private router: Router) {
    this.fetchRes
      .then((res) => res.json())
      .then((resList) => {
        this.dataList = resList;
        this.allDataList = resList;
      });
  }

  filterData(ev: any, isSelect) {
    this.isSearchStart = true;
    this.dataList = this.allDataList;
    this.searchedText = ev;

    if (ev && ev.trim() !== '') {
      this.dataList = this.dataList.filter((item) => {
        return item.name.toLowerCase().indexOf(ev.toLowerCase()) > -1;
      });
    } else {
      this.isSearchStart = false;
      this.dataList = this.allDataList;
    }
    if (isSelect) {
      this.isSearchStart = false;
    }
  }
  closeFilter() {
    this.isSearchStart = false;
  }
  selectApperFilter(val) {
    let data: any = [];
    this.allDataList.map((item) => {
      item.appearance.map((i) => {
        if (i == val) {
          return data.push(item);
        }
      });
    });
    this.dataList = data;
  }
  clearFilter() {
    this.dataList = this.allDataList;
  }
  openItemDetail(item: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(item),
      },
    };
    this.router.navigate(['character'], navigationExtras);
  }
}
