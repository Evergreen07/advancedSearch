import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = ({ setUsers }) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        const userSearch = async (keyword) => { 
            
            if(keyword.length >= 3){
                const inStore = checkStorage(keyword);

                if(inStore){
                    setUsers(inStore);
                } else {

                    const res = await axios.get(`https://api.github.com/search/users?q=${keyword}&client_id=93a3b09253242878dd4c&client_secret=099ce7cebdbcd3cc7e9fd65636bd82c94e55ff95`);
                    const data = res.data.items;
                    
                    setUsers(data);
                    setStorage(keyword, data);
                }
            } 
            else {
                setUsers([])
            }
        }

        userSearch(search);
        // eslint-disable-next-line
    }, [search]) 

    function checkStorage(keyword){
        const data = localStorage.getItem(`${keyword}`);
        if(data){
            return JSON.parse(data);
        }
        return null;
    }

    function setStorage(keyword, data){
        localStorage.setItem(`${keyword}`, JSON.stringify(data));
        setTimeout(() => {
            localStorage.removeItem(`${keyword}`);
        }, 5000)
    }

    function debounce(callback, delay = 300){
        let timerId;
        return function(args){
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                callback(args);
            }, delay);
        }
    }

    const handleInput = debounce((text) => {
        setSearch(text);
    }, 500)

    return (
        <div className="search">
            <i className="fas fa-search fa-lg"></i> &ensp;
            <input className="search-box" type="text" placeholder=" Type here to search..." onChange={(e)=> handleInput(e.target.value)}/>
        </div>
    )
}

export default Search