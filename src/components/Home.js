import React from 'react'
import '../css/Home.css'
import { Navbar } from './Navbar';
import { Products } from './Products'


export const Home = ({ user }) => {

    // const history = useHistory();

    // useEffect(() => {
    //     // forcing user to signup
    //     auth.onAuthStateChanged(user => {
    //         if (!user) {
    //             history.push('/login');
    //         }
    //     })
    // })

    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <Products />
        </div>
    )
}