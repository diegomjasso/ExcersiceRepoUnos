import { Component, OnInit } from '@angular/core';
import { Repository }	from	'../data_interfaces/github/repository';
import { GITHubAPI } from  '../services/github.api';


@Component({
	selector: 'finder',
	templateUrl: './finder.component.html',
	styleUrls: ['./finder.component.scss'],
	providers:	[	GITHubAPI	]
})

export class FinderComponent implements OnInit {
	label_text: string = "Name:";
	placeholder_text: string = 'Please typing your repository name here.!';
	name: string = "";

	repositories_list: any = [];
	constructor(private	githubapi:	GITHubAPI)	{
		this.name = "";
	}

	ngOnInit()	{
	}

	findRepositories(newValueName: string) {
		if (newValueName !== "") {
			this.name = newValueName;

			this.githubapi.getRepositories(this.name).then((data)	=>	{
				this.repositories_list = data;
			});
		}
	}

}