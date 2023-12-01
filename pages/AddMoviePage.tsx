import React, { useCallback, useState } from 'react';
import axios from 'axios';
import Input from '@/components/Input';
import Navbar from '@/components/Navbar';

const AddMoviePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');

  const Add = useCallback(async () => {
    try {
      await axios.post('/api/add', {
        title,
        description,
        videoUrl,
        thumbnailUrl,
        genre,
        duration
      });
    } catch (error) {
      console.error(error);
    }
  }, [title, description, videoUrl, thumbnailUrl, genre, duration]);

  return (
    <>
      <Navbar />
      <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-24 lg:w-2/5 lg:max-w-md rounded-md w-full">              <h2 className="text-white text-4xl mb-8 font-semibold">
                Add Movie
              </h2>
              <div className="flex flex-col gap-4">
                <Input
                  id="title"
                  type="text"
                  label="Title"
                  value={title}
                  onChange={(e: any) => setTitle(e.target.value)} 
                />
                <Input
                  id="description"
                  type="text"
                  label="Description"
                  value={description}
                  onChange={(e: any) => setDescription(e.target.value)} 
                />
                <Input
                  id="videoUrl"
                  type="text"
                  label="Video URL"
                  value={videoUrl}
                  onChange={(e: any) => setVideoUrl(e.target.value)} 
                />
                <Input
                  id="thumbnailUrl"
                  type="text"
                  label="Thumbnail URL"
                  value={thumbnailUrl}
                  onChange={(e: any) => setThumbnailUrl(e.target.value)} 
                />
                <Input
                  id="genre"
                  type="text"
                  label="Genre"
                  value={genre}
                  onChange={(e: any) => setGenre(e.target.value)} 
                />
                <Input
                  id="duration"
                  type="text"
                  label="Duration"
                  value={duration}
                  onChange={(e: any) => setDuration(e.target.value)} 
                />
              </div>
              <button onClick={Add} className="bg-blue-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                Add Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMoviePage;
