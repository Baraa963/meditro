import BlogDetailsHeader from '../../Components/Header/header'
import BlogDetails from '../../Components/BlogDetails/blogDetails'
import { Stack } from '@mui/material'
export default function blogDetailsPage() {
  return (
    <Stack sx={{display:'flex',gap:10}}>
      <BlogDetailsHeader ComponentName='Blog Details' Path='blog-detail'/>
      <BlogDetails/>
    </Stack>
  )
}

