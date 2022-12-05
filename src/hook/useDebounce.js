import axios from "axios";

export const processChanges = debounce((value, hook, rule , input) => saveInput(value, hook, rule, input));

function debounce(func, timeout = 600){
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => { func.apply(this, args); }, timeout);
	};

}
function saveInput(value, hook, rule, input){
	if(value.length > 3){
		if(rule === 'search'){
			axios.get(`https://api.github.com/search/users?q=${value}`)
				.then(res => hook(res.data))
		}else if(rule === 'includes'){
			const data = value.filter((item) => input !== 'all' ? item.name.toLowerCase().includes(input.toLowerCase()) : item)
			hook(data.reverse())
		}
	}
}