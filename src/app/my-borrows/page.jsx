// import React from 'react'

// function Myborrows() {
//     return (
//         <div>
//             my borrows
//         </div>
//     )
// }

// export default Myborrows




import React from 'react'
import Myborrowcontainer from '../components/myborrowcontaine';



async function Myborrows() {
 

const FD = await fetch(`http://localhost:8000/borrows`)
const CDF=await FD.json()
    
    return (
<Myborrowcontainer CDF={CDF}/>
    )
}

export default Myborrows











