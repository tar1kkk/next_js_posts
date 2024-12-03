'use client'

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { fetchPosts } from "@/app/utils/fetchPosts";
import { Card, CardHeader } from "@/app/components/ui/card"; // Пример импорта

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-lg font-medium">Loading...</p>
        </div>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <Link href={`/post/${post.id}`} className="text-blue-500 underline">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                        </Link>
                    </CardHeader>
                    <div className='ml-6'>
                        <p>{post.body.substring(0, 50)}...</p>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default Posts;
