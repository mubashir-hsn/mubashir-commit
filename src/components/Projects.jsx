"use client"

import React, { useEffect, useState } from 'react';
import projectData from '@/data/projectData.json';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from 'next/link';
import { X } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from './ui/button';

const Projects = () => {
    const [projects, setProjects] = useState(projectData);
    const [filterProjects, setfilterProjects] = useState("All");

    const filters = [
        "All",
        "Next.js",
        "React.js",
        "Node.js",
        "TypeScript",
        "PHP",
        "Python",
    ]

    useEffect(() => {
        const handleFilterProjects = () => {
            if (filterProjects === "All") {
                setProjects(projectData);
            } else {
                const filtered = projectData.filter((p) =>
                    p.technologies.includes(filterProjects)
                );
                setProjects(filtered);
            }
        };

        handleFilterProjects();
    }, [filterProjects]);



    //  react-slick-slider setting
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };



    const [selectedProject, setsSelectedProject] = useState(null)
    return (

        <>
            <div id='projects' className='pt-20 pb-5 space-y-10'>
                <div className='pl-5'>
                    <h1 className='text-4xl md:text-5xl font-medium line heading pb-3 text-gray-700'>My Work</h1>
                </div>
                <div className='space-y-4'>
                    <div className='w-full pl-5 flex flex-wrap justify-start items-center gap-5'>
                        {
                            filters.map((filter, idx) => (
                                <Button
                                    onClick={() => setfilterProjects(filter)}
                                    key={idx}
                                    className={`px-5 py-2 ${filterProjects === filter ? 'bg-gray-700 text-white' : 'bg-white text-orange-400 hover:text-white  hover:-translate-y-1'} hover:bg-gray-700 rounded-full transition-all duration-500 font-medium cursor-pointer`} >
                                    {filter}
                                </Button>
                            ))
                        }

                    </div>
                    {
                        projects.length > 0 ? (
                            <Carousel className="w-full max-w-sm md:max-w-5xl mx-auto mt-10">
                        <CarouselContent className="-ml-1">
                            {projects.map((project, idx) => (
                                <CarouselItem key={idx} className="basis-[80%] md:basis-1/2 lg:basis-1/3">
                                    <div onClick={() => setsSelectedProject(project)} className="bg-white hover:scale-3d cursor-pointer h-[400px] rounded-lg space-y-4 overflow-hidden shadow-lg">
                                        <img src={project.thumbnail} className='w-full object-contain h-[250px] border-b border-black' alt="img" />
                                        <div className='p-3 pt-4 space-y-5'>
                                            <h3 className='font-medium heading line-clamp-1 text-lg hover:underline'>{project.name}</h3>
                                            <div className='flex justify-start items-center gap-3'>
                                                {
                                                    project.technologies.slice(0,3).map((t,idx)=>(
                                                        <button className=' text-xs md:text-sm bg-orange-400/80 text-white font-medium px-2 py-1 rounded-full' key={idx}>{t}</button>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className='hidden lg:block'>
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                        ) : (
                            <p className='p-4 pt-8 font-medium text-gray-800'>No project available.</p>
                        )
                    }
                </div>

            </div>


            {

                selectedProject && <div className='w-full min-h-screen fixed top-0 left-0 z-50 bg-orange-100/70 flex justify-center items-center'>
                    <div className='w-[90%] h-[95vh] relative bg-orange-400/90 flex flex-col gap-10 overflow-y-auto rounded-2xl'>

                        <div className='w-full rounded-xl relative flex justify-center items-center'>
                            <div className='w-[80%] md:w-[90%] pt-2 bg-orange-200/40 mt-2 rounded-md'>
                                <Slider {...settings}>

                                    {
                                        selectedProject?.images?.map((img, idx) => (
                                            <div key={idx} className='w-full h-[300px] md:h-[500px]'>
                                                <img src={`${img}`} className='w-full h-full object-contain' alt="img" />
                                            </div>
                                        ))
                                    }


                                </Slider>
                            </div>
                        </div>

                        <div className='md:px-16 py-5 w-full h-auto'>
                            {/* Project name & description */}
                            <div className='p-5 md:p-10 bg-orange-200/50 rounded-xl mb-4 space-y-4'>
                                <h1 className='text-xl md:text-3xl heading font-medium text-gray-800'>{selectedProject.name}</h1>
                                <p className='md:text-lg text-gray-600 text-justify'>{selectedProject.description}</p>

                                {/* Project Links */}
                                <div className='flex gap-5'>
                                    <Link href={`${selectedProject.githubLink}`} target='_blank' className='px-5 py-2 rounded-md bg-white text-orange-500 font-medium hover:text-gray-700'>Github</Link>
                                    {
                                        selectedProject.livePreview && <Link className='px-5 py-2 rounded-md bg-gray-700 text-white font-medium hover:text-orange-500' href={`${selectedProject.livePreview}`} target='_blank'>Live Preview</Link>
                                    }
                                </div>
                            </div>

                            {/* Project Features & Technologies */}
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-2  pt-5'>
                                <div className='p-4 md:p-10 bg-orange-200/50 rounded-xl mb-4'>
                                    <h2 className='text-lg md:text-2xl heading font-medium pb-4 text-gray-800'>Features</h2>
                                    <ul className='pl-3 capitalize'>

                                        {
                                            selectedProject?.features?.map((fea, index) => (
                                                <li key={index} className='text-gray-600'> <span className="text-amber-700">✔</span> {fea}</li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className='p-4 md:p-10 bg-orange-200/50 rounded-xl mb-4'>
                                    <h2 className='text-lg md:text-2xl heading font-medium pb-4 text-gray-800'>Technologies</h2>
                                    <ul className='pl-8 capitalize'>
                                        {
                                            selectedProject?.technologies?.map((tech, index) => (
                                                <li className='list-disc text-gray-600' key={index}>{tech}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button className='p-3 rounded-full shadow-md bg-gray-700 text-white font-bold cursor-pointer absolute top-4 right-5 text-center' onClick={() => setsSelectedProject(null)}> <X className='w-4 h-4' /> </button>
                </div>

            }
        </>


    )
}

export default Projects