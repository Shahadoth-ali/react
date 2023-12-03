import React from 'react'


const users=[
    {
        fullname:"md shahadoth ali",
        age:22,
        phones:[
            {home:"01989985348"},
            {office:"01721319829"}
        ],
    },
    {
        fullname:"rubayet hossain",
        age:22,
        phones:[
            {home:"01989985348"},
            {office:"01721319829"}
        ],
    },
    {
        fullname:"most rojina parveen",
        age:22,
        phones:[
            {home:"01989985348"},
            {office:"01721319829"}
        ],
    }
]

export default function App() {
  return (
    <div>
      {users.map((user,index)=>
      <article>
        <h3>fullname:{user.fullname}</h3>
        <p>age:{user.age}</p>

        {user.phones.map((phone,index)=>
        <div key={index}>
          <p>Home:{phone.home}</p> 
          <p>Ofiice:{phone.office}</p> 
        </div>
        )}
      </article>
      )}
    </div>
  )
}
