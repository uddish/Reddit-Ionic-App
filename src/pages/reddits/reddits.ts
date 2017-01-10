import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

    items: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {

  }

  ngOnInit()  {
      this.getPosts('sports', 5);
  }

  getPosts(category, limit) {
      this.redditService.getPosts(category, limit).subscribe(respone =>{
          this.items= respone.data.children;
      })
  }

  viewItem(items)   {
      this.navCtrl.push(DetailsPage, {
          item:items
      });
  }

}
