const initState = {
    projects:[
        {id:"1", title:"Merhaba Dünya ilk proje", content:"abc"},
        {id:"2", title:"Merhaba Dünya ikinci proje", content:"abc"},
        {id:"3", title:"Merhaba Dünya ucuncu proje", content:"abc"}

    ]
};

const projectReducer = (state=initState, action ) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log('created project',action.project)
    }
    return state;
}

export default projectReducer;