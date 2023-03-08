const Book =(props)=>{
  console.log(props)
  return React.createElement('div',{} , [
   React.createElement('h2', {}, props.name),
   React.createElement('p', {}, props.year),
   React.createElement('p',{}, props.price)
   
  ] )
}

const App =()=>{
  return React.createElement('div',{}, [
    React.createElement('h1', {id: 'title',className:'paragraph'}, "Assalomu Alaykum"),
    React.createElement(Book,{name:'JS for beginners', year:2020,price:50}),
    React.createElement(Book,{name:'React for beginners', year:2019,price:60}),
    React.createElement(Book,{name:'Vue for beginners', year:2021,price:70})
  ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))