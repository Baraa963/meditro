import BlogDetailsHeader from '../../Components/Header/header'
import BlogDetails from '../../Components/BlogDetails/blogDetails'
export default function blogDetailsPage() {
  return (
    <>
      <BlogDetailsHeader ComponentName='Blog Details' Path='blog-detail'/>
      <BlogDetails/>
    </>
  )
}

