import { people } from '../utils/data'
export default function People(){
//     const people = [
// 'Creola Katherine Johnson: mathematician',
// 'Mario José Molina-Pasquel Henríquez: chemist',
// 'Mohammad Abdus Salam: physicist',
// 'Percy Lavon Julian: chemist',
// 'Subrahmanyan Chandrasekhar: astrophysicist'
// ];
// const ListItems = people.map(function (p, index) {
//     return <li key={index}>{p}</li>
// })
const ListItems = people.map(function(p) {
return <div className='float-left'>People Component
    {/* <ul>{ListItems}</ul> */}
        <li key={p.id}>
            <img src="https://avatar.iran.liara.run/public" className='w-40' alt={p.name} /> 
            <p>
                <b>{p.name}</b>
                {' ' + p.profession + ' '}
                known for {p.accomplishment}
            </p>
        </li>
    </div>
})
    return (
        <ul>{ListItems}</ul>
    )
}