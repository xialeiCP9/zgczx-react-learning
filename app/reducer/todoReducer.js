import $ from "jquery";
let initState = {
	idx: 0,	//当前相册的图片编号
	album: 0, //当前所在相册类型 0-类型 1-场景 2-颜色
	filter: 0, // 当前所在相册编号
	amount: 0,
	data: {
		name: "",
		"picture-index": 0,
		pic: []
	}
};
let calPicAmount = (data) => {
	let amount = 0;
	data.pic.forEach((pic) => {
		pic.filter.forEach((filter) => {
			amount += filter.pics.length;
		});
	});
	return amount;
}
export default (state = initState,action) => {
	switch(action.type){
		case "GETDATA":
			return {
				idx: 0,
				album: 0,
				filter: 0,
				amount: calPicAmount(action.data),
				data: action.data
			};
			break;
		case "CHOOSE_IMG":
			return {
				...state,
				idx: action.number
			}
			break;
		case "GO_PREV":
			let idx = state.idx;
			let album = state.album;
			let filter = state.filter;
			if(state.idx == 0){
				if(state.filter == 0){
					if(state.album == 0){
						album = state.data.pic.length - 1;
						console.log("album",album);
						filter = state.data.pic[album].filter.length - 1;
						console.log("filter",filter);
						idx = state.data.pic[album].filter[filter].pics.length - 1;
						console.log("album",idx);
					} else {
						album = state.album - 1;
						filter = state.data.pic[album].filter.length - 1;
						idx = state.data.pic[album].filter[filter].pics.length - 1;
					}
					
				} else {
					filter = state.filter - 1;
					idx = state.data.pic[album].filter[filter].pics.length - 1;
				}
				
			} else {
				idx = state.idx - 1;
			}
			return {
				...state,
				idx,
				album,
				filter
			}
			break;
		case "GO_NEXT":
			console.log("执行GO_NEXT")
			if(state.idx == state.data.pic[state.album].filter[state.filter].pics.length - 1){
				if(state.filter == state.data.pic[state.album].filter.length - 1){
					if(state.album == state.data.pic.length - 1){
						return{
							...state,
							idx: 0,
							album: 0,
							filter: 0
						}
					}
					return{
						...state,
						idx: 0,
						album: state.album + 1,
						filter: 0
					}
					
				} 
				return{
						...state,
						idx: 0,
						filter: state.filter + 1
				}				
			}
			return{
				...state,
				idx: state.idx + 1
			}
			break;
		case "SWITCH_FILTER":
			return {
				...state,
				idx: 0,
				filter: action.filter,
				album: action.album
			};
			break;
		default:
			return state;
	}
}