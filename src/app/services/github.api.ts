import	{	Injectable	}	from	'@angular/core';
import	{	HttpModule	}	from	'@angular/http';
import	{	Http,	Response,	Headers	}	from	'@angular/http';
import	{	Observable	}	from	'rxjs/Observable';
import	{	Repository }	from	'../data_interfaces/github/repository';
import  { Comment }  from  '../data_interfaces/github/comment';
import	'rxjs/add/operator/map';
import	'rxjs/add/operator/toPromise';

@Injectable()
export	class GITHubAPI	{
	urlRepositoriesJson	= "https://api.github.com/search/repositories?q=";
	constructor(private http : Http){}

	getRepositories(name): Promise<Repository>{
  	return this.http
  	 	.get(this.urlRepositoriesJson + name, {headers: this.getHeaders()})
  		.toPromise()
       	.then(mapRepositories)
       	.catch(handleError);
	};

  getComments(urlComments): Promise<Comment>{
    return this.http
      .get(urlComments, {headers: this.getHeaders()})
      .toPromise()
        .then(mapComments)
        .catch(handleError);
  };

	private getHeaders()	{
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		return headers;
	}
}

function handleError(error: any)	{
  let errorMsg = error.message || `erroror`
  // instead of Observable we return a rejected Promise
  return Promise.reject(errorMsg);
}

function mapRepositories(response:Response): Repository	{
   return response.json().items.map(toRepository);
}

function toRepository(r:any): Repository	{
  let Repository = <Repository>(r);
  return Repository;
}

function mapComments(response:Response): Comment {
   return response.json().map(toComment);
}

function toComment(r:any): Comment  {
  let Comment = <Comment>(r);
  return Comment;
}