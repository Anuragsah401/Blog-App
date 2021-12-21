import React from 'react'
import Pagination from '../../components/Pagination/Pagination'

import avatar from '../../assets/images/avatar.jpg'

import classes from './Blog.module.css'
import Aside from '../../components/Aside/Aside'


const Blog = () => {

    const blogs = [
        {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
          {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
          {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
          {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
          {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
        {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
        {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
        {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
        {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
        {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
        {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
        {
            blogImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            blogDate: '12 Nov. 2019',
            blogTitle: 'Blog Title',
            blogContent: 'Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.',
            personName: 'Admin',
            avatar: avatar
        },
        
]

    return (
        <div className={classes.container}>
            <div className={classes.blogContainer}>
               <Pagination blogs={blogs} />
               <Aside blogs={blogs} />
            </div>
        </div>
        
    )
}

export default Blog
