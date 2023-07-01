import PostForm from "../../../components/postForm";
interface EditParams {
    params: {
        postId: number
    }
}

export default function EditPost(props: EditParams) {
    return (
        <>
            <header>
                <h1>Edit post {props.params.postId}</h1>
            </header>
            <>
                <PostForm />
            </>
        </>
    )
}