/* eslint-disable react-hooks/rules-of-hooks */
import BlogDetailsHeader from '../../Components/Header/header'
import BlogDetails from '../../Components/BlogDetails/blogDetails'
import { Stack } from '@mui/material'
import { useEffect } from 'react';
export default function blogDetailsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack sx={{display:'flex',gap:10}}>
      <BlogDetailsHeader ComponentName='Blog Details' Path='blog-detail'/>
      <BlogDetails/>
    </Stack>
  )
}

