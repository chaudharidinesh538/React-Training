const example = React.createElement(
    "div",
    {id: "parent"}, 
    
    [
    React.createElement( 
        "div",
        {id : "child1"},[
    React.createElement(
            "h1", {}, "I am an H1 Tag" ) ,
    React.createElement(
            "h2", {}, "I am an  H2 Tag" )]
)  ,
   React.createElement( 
        "div",
        {id : "child2"},[ React.createElement(   "h1", {}, "I am an new H1 Tag" ) ,
                          React.createElement( "h2", {}, "I am an new H2 Tag" ) ]
)
    ]
);





const header = React.createElement(
    "h1",
     {id: "heading"},
    "Hello World from react"
    );

    console.log(header);

const rootdom = ReactDOM.createRoot(document.getElementById("root"))

rootdom.render(example);
