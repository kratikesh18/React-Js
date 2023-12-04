

//this is pure js this is not the way react render the element 
function renderElements( container){
    //creating the element manually old js
    let ele = document.createElement('a')
    ele.innerHTML = "click me "
    ele.setAttribute('href' , "https://www.linkedin.com")
    ele.setAttribute('target' , "_blank")
    
    container.appendChild(ele)
}

//react need the element to the object form 
//so we need an object of the data for the element
const customElement = { 
    type: "a", 
    properties:{
        href:"https://www.linkedin.com",
        target:'_blank'
    },
    innerChild: "Click me to visit LinkedIn"
}

//below is the function which render the element like in react
function renderElementLikeReact(customElemen , container){
    // const ele = document.createElement(customElemen.type)
    // ele.setAttribute('href', customElemen.props.href)
    // ele.setAttribute('target', customElemen.props.target)
    // ele.innerHTML = customElemen.innerChild;

    // container.appendChild(ele)


    //doing the same thing but in the optimised way 
    const ele = document.createElement(customElemen.type);
    ele.innerHTML = customElemen.innerChild;

    ///setting properties/attributes of that element 
    for(property in customElemen.properties){
        ele.setAttribute(property , customElemen.properties[property])
    }

    //inserting the ele to the container
    container.appendChild(ele)
}


//react index.js takes the root element and add the elements to it so lets try it 

const rootContainer = document.getElementById('root');

// and render the elements for the webpage or the root container
// renderElements(rootContainer)    //this is basic js

//calling the function which renders element like React.createElement();

renderElementLikeReact(customElement , rootContainer)



// NOTE : ALL THE OTHER CODE OF THE ABOVE LECTURE IN THE 02_react-with-vite folder