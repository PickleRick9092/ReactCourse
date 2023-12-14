import './App.css'
import Card from './components/Card'

function App() {
const Costs = [
{id:1,type:"laptop" ,price:1000},
{id:2,type:"mobile" ,price:2000},
{id:3,type:"monitor" ,price:3000},
]
  return (
   <div>
    {
     Costs.map(item => {
       return <Card key={item.id}  data={item} />
      })
    }
   </div>
  // Costs.map( (item) => {
  //   return <Card key={item.id} data={item}/>
  // }
  //)
    )
}

export default App
