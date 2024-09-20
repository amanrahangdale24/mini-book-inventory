import React, { useState } from 'react'

import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";


const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Historical Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Romance",
    "Thriller",
    "Adventure",
    "Horror",
    "Non-Fiction",
    "Biography",
    "Memoir",
    "Self-help",
    "Business",
    "Health & Wellness",
    "Travel",
    "History",
    "Science",
    "Children’s Books",
    "Picture Books",
    "Early Readers",
    "Middle Grade",
    "Young Adult (YA)",
    "Educational",
    "Textbooks",
    "Academic Journals",
    "Reference Books",
    "Study Guides",
    "Poetry",
    "Classical Poetry",
    "Contemporary Poetry",
    "Epic Poetry",
    "Comics & Graphic Novels",
    "Superhero",
    "Manga",
    "Fantasy",
    "Slice of Life",
    "Religious & Spiritual",
    "Religious Texts",
    "Spiritual Guidance",
    "Religious History",
    "Cooking & Food",
    "Cookbooks",
    "Food Memoirs",
    "Nutrition Guides",
    "Arts & Photography",
    "Art History",
    "Photography Collections",
    "Craft and DIY",
    "Self-Development",
    "Personal Growth",
    "Motivational",
    "Mindfulness & Meditation"
  ];

  const [selectedBookCategories, setSelectedBookCategories] = useState(bookCategories[0]); // default value

  const handleCategoryChange = (e) => {
    setSelectedBookCategories(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageurl = form.imageurl.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookpdfurl = form.bookpdfurl.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageurl,
      category,
      bookDescription,
      bookpdfurl
    }
    console.log(bookObj);

    // send data to DB 
    fetch("http://localhost:4044/upload-book" ,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert("book loaded successfully")
    }).then(res => res.json()).then(data => {
      alert("book loaded successfully")
      form.reset(); 
    })

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>
        Upload a Book
      </h2>

      <form onSubmit={handleSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        {/* first row */}
        <div className='flex gap-8'>

          {/* book Name */}

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
          </div>

          {/* Author Name */}

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
          </div>

        </div>

        {/* second row */}

        <div className='flex gap-8'>

          {/* image URL */}

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="
imageurl" value="Book Image URL" />
            </div>
            <TextInput id="
imageurl" name='imageurl' type="text" placeholder="
Book Image URL" required />
          </div>

          {/* category */}

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <select id='inputState' name='categoryName' className='w-full rounded ' value={selectedBookCategories} onChange={handleCategoryChange}>
              {
                bookCategories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))
              }
            </select>
          </div>

        </div>


        {/* description */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="
bookDescription" value="
Book Description" />
          </div>
          <Textarea className='w-full' name="bookDescription" id="
bookDescription" required rows={4} />

        </div>



        {/* book pdf link */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookpdfurl" value="Book PDF URL" />
          </div>
          <TextInput id="bookpdfurl" name='bookpdfurl' type="text" placeholder="Book Pdf Url" required />
        </div>

        {/* submit button */}

        <Button type='submit' className='mt-4'>
          Upload Book
        </Button>
      </form>

    </div>
  )
}

export default UploadBook
