import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Add() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')

    const onsubmit = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('image', img)
        formData.append('description', desc)
        formData.append('category', 'digital marketing')

        axios.post("http://localhost:5000/blog", formData, {}).then(
            res => {
                console.log(res)
                setDesc('')
                setImg('')
                setTitle('')
            }
        )
    }

    return (
      <>
        <div className="mt-5 mx-3">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Add News</h3>
                <p className="mt-1 text-sm text-gray-600">
                    <Link to="/" >
                        <p className="bg-red-400 w-1/6 h-5 justify-center items-center px-2 text-white rounded-sm" >kembali</p>
                    </Link>
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="" method="POST" encType="multipart/form-data">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Title
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="title"
                            id="company-website"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="www.example.com"
                            onChange={(d) => setTitle(d)}
                          />
                        </div>
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="description"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          defaultValue={''}
                          onChange={(a) => setDesc(a)}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        isi berita
                      </p>
                    </div>
  
                    <div>
                      <label className="block text-sm font-medium text-gray-700">photo</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input id="file-upload" name="image" type="file" className="sr-only" onChange={(a) => setImg(a)} />
                            </label>
                            <p className="pl-1">or drag and drop</p>    
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      onClick={() => onsubmit}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </>
    )
  }
  