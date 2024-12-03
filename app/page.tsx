import Posts from "@/app/components/posts";


export default function Home() {

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">My Blog</h1>
            <Posts/>
        </div>
    );
}
