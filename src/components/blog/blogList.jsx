import { useState, useEffect } from 'react'
import { newMessage, genMessage, customMessage, Message } from '../utils/message.jsx'
import BLOG from './blogInList.jsx'
import blogs8787api from 'blogs8787api.js'

const BlogList = ({type}) => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const isInUser = type === 'inUser'
    const isInRecommendations = type === 'inRecommendations'

    useEffect(() => {
        const loadData = async () => {
            if (!isInRecommendations) {
                setLoading(false);
                return;
            }
            try {
                const response = await blogs8787api.recomendations();
                setRecommendations(response?.list || []);
            } catch (error) {
                console.error('Error loading recommendations:', error);
                setRecommendations([]);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [isInRecommendations]);

    return (
        <div class='blogs'>
            {isInUser ? (
                <div></div>
            ) : null}
            {isInRecommendations ? (
                <div>
                    {loading ? (
                        <p>Loading</p>
                    ) : (
                        <div>
                            {recommendations.map((blog) => (
                                <BLOG id={blog.id} name={blog.name} author={blog.author} />
                            ))}
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    )
}

export default BlogList
