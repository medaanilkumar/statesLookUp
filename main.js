var input1=document.querySelector('#input')
var output=document.querySelector('#output')
const url='in.json'


const   searchInput= async(e)=>{
    const searchText=e.target.value
    const response=await fetch(url)
    const data=await response.json()
    console.log(data)
    let filterData=data.filter((state)=>{
        if(state.key.includes(searchText)||state.val.includes(searchText)){
            return state.key
        }
    })
    console.log(filterData)
    if(searchText===""){
        filterData=[]
    }
    let d=""
    filterData.forEach((eachState)=>{
        d+=`<div class="final"><span class="state">${eachState.key}</span>
        <span>${eachState.val}</span>
        </div>`
       
    })
    output.innerHTML=d
}
input1.addEventListener('input',searchInput)