import React, { useEffect, useState } from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts'

const App =() => {

    const [articles, setArticles] = useState([])
    const [articlesPark, setArticlesPark] = useState([])

    useEffect(() => {
        client.getEntries()
            .then((response) => {
                console.log('Total Items::',response.items)
                // setArticles(response.items)
            })
            .catch(console.error)
    }, []);
    
    useEffect(() => {
        client.getEntries({ content_type:'parklandRecipes'})
            .then((response) => {
                console.log('Response Texts::',response.items)
                setArticlesPark(response.items)
            })
            .catch(console.error)
    }, []);

    useEffect(() => {
        client.getEntries({ content_type:'contentModalRecipes'})
            .then((response) => {
                console.log('Response Texts Park::',response.items)
                setArticles(response.items)
            })
            .catch(console.error)
    }, []);
    
    return (
            <div className="App">
                <div className='container'>
                    <header>
                        <div className='wrapper'>
                            <span className='logo'>FIRST CONTENTFUL POC - PARKLAND</span>
                        </div>
                    </header>
                    <main>
                        <div className='wrapper'>
                            <Posts posts={articles} isPark = {false}/>
                        </div>
                        <div className='wrapper'>
                            <Posts posts={articlesPark} isPark={ true}/>
                        </div>

                    </main>
                </div>
            </div>
        );
    }
export default App;
