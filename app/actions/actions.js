import $ from "jquery";
export const getData = () => (dispatch) => {
	$.get("/data/database.json",(data) => {
		dispatch({"type": "GETDATA",data})
	})	
}

export const chooseImg = (number) => ({type: "CHOOSE_IMG",number});

export const goPrev = () => ({type:"GO_PREV"});
export const goNext = () => ({type:"GO_NEXT"});

export const switchFilter = (album,filter) => ({type:"SWITCH_FILTER",album,filter});