import superagent from 'superagent';
export function request(method = 'GET', endpoint) {
	const ajax = superagent(method, `${process.env.API_BASE}${endpoint}`);
	if(method == 'GET') {
		ajax.accept('json');
	}
	if(method == 'POST') {
		ajax.type('form');
	}
	return ajax
}