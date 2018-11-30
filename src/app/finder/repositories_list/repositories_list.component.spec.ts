import { Component } from '@angular/core';

@Component({
	selector: 'repositories_list',
	templateUrl: './repositories_list.component.html',
	styleUrls: ['./repositories_list.component.scss']
})

export class RepositoriesList {
	label_text: string = "Name:";
	placeholder_text: string = 'Please typing your repository name here.!';
}