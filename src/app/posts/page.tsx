import PostForm from '../components/postForm';
import PostCard from '../components/post';

const POSTS = Array.from({ length: 9 });
export default function postsPage() {
    return (
        <>
            <header>
                <h1>Posts</h1>
                <h2>Add new post</h2>
                <PostForm />
            </header>
            <ul className="grid grid-cols-3 gap-3">
                {POSTS.map((post, index) => (
                    <PostCard key={index} postId = {index.toString()}/>
                ))}
            </ul>
        </>
    )
}