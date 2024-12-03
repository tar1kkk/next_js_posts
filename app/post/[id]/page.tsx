import Link from "next/link";
import { fetchPost } from "@/app/utils/fetchPost";
import {Card, CardHeader} from "@/app/components/ui/card";
import {Button} from "@/components/ui/button";


export default async function PostPage({ params }: { params: { id: string } }) {
    const post = await fetchPost(params.id);

    if (!post) {
        throw new Error("Post not found.");
    }

    return (
        <div className="flex justify-center p-8">
            <Card className="max-w-xl w-full">
                <CardHeader>
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </CardHeader>
                <div>
                    <p className="text-gray-700 ml-6">{post.body}</p>
                    <Link href="/">
                        <Button variant="link" className="mt-4">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}
