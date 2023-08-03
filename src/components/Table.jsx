import React from 'react'

export const Table = (props) => {


    console.log(props)
    return (
        <div /* className='justify-content-center' */>
            {/* <table className="table table-striped table-hover table-bordered table-sm"> */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        {/* <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Website</th>
                        <th scope="col">Adrress</th> */}
                        {props.columns ? props.columns.map((c, index) => <th key={index} scope="col">{c}</th>) : null}
                    </tr>
                </thead>
                <tbody>
                    {props.data ? props.data.map((user) =>
                        <tr key={user.id} >
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.website}</td>
                            <td>{`${user.address.street}, ${user.address.suite} | ${user.address.suite}, ZIP: ${user.address.zipcode}  `}</td>
                        </tr>
                    ) : null}
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
