import { List, Title } from "./"



export const Notes = ({ posts, status }) => {

    console.log(posts)
    return (
        <div className="mt-14">
            <div className="md:mb-20 mb-12">
                <Title />
            </div>
            <List posts={posts} status={status}/>
        </div>
    )
}
