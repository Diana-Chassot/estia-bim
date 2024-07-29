"use client"
import React, { Component } from "react";
import Slider from "react-slick";

const data = [
    {
        href:"https://www.buildingsmart.org",
        imgSrc: "/images/Companies/BuildingSMART.png"
    },
    {
        href:"https://www.groupe-grisoni.ch",
        imgSrc: "/images/Companies/groupegrisoni.png"
    },
    {
        href:" https://ifcopenshell.org",
        imgSrc: "/images/Companies/ifcopenshell.svg"
    },
    {
        href:"https://www.buildingsmart.org/about/openbim",
        imgSrc: "/images/Companies/OpenBIM.png"
    }
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center ' >
                <div className="mx-auto max-w-2xl py-4  sm:px-6 lg:max-w-7xl lg:px-8" >
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <a target="blanc" href={item.href} key={i} className="mr-4 border-none  ">
                                    <img src={item.imgSrc} alt={item.imgSrc} className="h-16 w-52   object-contain bg-white rounded-full p-4" />
                                </a>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>

        )
    }
}
