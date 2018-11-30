import { Component, Input, OnInit } from '@angular/core';
import { GITHubAPI } from  '../../services/github.api';
import { Comment }  from  '../../data_interfaces/github/comment';

@Component({
	selector: 'repositorieslist',
	templateUrl: './repositories_list.component.html',
	styleUrls: ['./repositories_list.component.scss'],
	providers:	[	GITHubAPI	]
})

export class RepositoriesList implements OnInit {
  @Input() repositories_list: any;

  constructor(private	githubapi:	GITHubAPI) {
  }


	ngOnInit()	{}

	doCommentsRequest(index) {
		let split_url = this.repositories_list[index].comments_url.split("{/num");
		this.githubapi.getComments(split_url[0]).then((data)	=>	{
			this.repositories_list[index].comments_list = data;
			this.repositories_list[index].comments_list_show = true;
		});
	}

	showComments(index) {
		if (!this.repositories_list[index].comments_list_show) {
			this.doCommentsRequest(index);
		} else {
			this.repositories_list[index].comments_list_show = false;
		}
	}
}