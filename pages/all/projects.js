import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 5

const folder_path = "all/projects";

export async function getStaticProps() {
  
  const posts = await getAllFilesFrontMatter(folder_path)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    path: folder_path
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function ProjectList({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO
        title={`All Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Projects"
      />
    </>
  )
}
