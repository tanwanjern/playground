import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from 'gatsby-plugin-image'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

// https://stories.google/

// PENDING BUG FIXES
// - Phone ref scroll trigger start point 
// - Responsive animation
// - Smoothness

const Showcase1 = () => {

    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const phoneRef = useRef(null);
    const textRef = useRef(null);

    useEffect(()=>{

        Splitting({ by: 'chars' });

        function intro(){
            const tl = gsap.timeline({
                delay: 0.5,
            }) 
            tl.fromTo(".hero-phone", {y: 500}, {y: 0, duration: 1})
            tl.fromTo(".hero-element", {y: 300}, {y: 0, duration: 0.75, delay: function (index){
                return 0.2 * index
            }})
            tl.fromTo(".hero-text", {opacity: 0}, {opacity: 1, duration: 0.5})
            // tl.from(".hero-text .char", {
            //     duration: 0.5, opacity: 0, stagger: 0.05, y: 30, ease: "expo",
            // });
            return tl;
        }

        function phoneAnimation(){
            const tl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: phoneRef.current,
                    start: "top top", // (BUG): Trigger start point (top - 200)
                    end: "+=1000",
                    pin: true,
                    scrub: true,
                    markers: true
                }
            })
            tl.to(phoneRef.current, {scale: 0.8}, "+=0.2")
            tl.to(".hero", {
                backgroundColor: '#212225',
                duration: 0.25
            }, "-=2")

            return tl;
        }

        function backgroundAnimaton(){
            const tl2 = gsap.timeline({
                scrollTrigger:{
                    trigger: textRef.current,
                    start: "top center",
                    scrub: true,
                    // markers: true
                }
            })
            tl2.to(".hero", {
                backgroundColor: 'white',
                duration: 0.5
            }, "-=2")

            return tl2;
        }

        const master = gsap.timeline();
        master.add(intro());
        setTimeout(()=>{
            master.add(phoneAnimation());
            master.add(backgroundAnimaton());
        }, 1000)

    }, [])

  return(
    <Layout>
      <Seo title="Showcase 1 - Stories Google" />
        
        <div className="hero relative">

            <div className="mx-auto pt-24 pb-72 lg:w-3/6">
                <div className="flex flex-col justify-center items-center">
                    <StaticImage
                        src="https://stories.google/static/img/web-stories-logo.png?cache=7e03646"
                        width={88}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="Icon of google stories"
                        className="mb-5"
                        placeholder="blurred"
                    />
                    <h1 className="hero-text text-6xl text-center" data-splitting><span className="font-bold">Stories</span> meet their widest audience ever</h1>
                </div>
            </div>

            <div className="hero-phone absolute top-96 left-0 w-full" ref={phoneRef}>
                <div className="flex justify-center relative w-2/6 mx-auto">
                    <div className="w-full aspect-[9.3/20] bg-black rounded-[50px]"></div>
                    <div className="absolute top-[5%] right-0 left-0">
                        <video
                            className="w-[95%] h-[92.5%] mx-auto object-cover rounded-3xl overflow-hidden drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                            src="https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0"
                        />
                    </div>
                </div>
            </div>
        
            <div className="h-screen">
                <div className="flex flex-row gap-4 mx-5">
                    {
                        Array(5).fill(0).map((item, index)=>{

                            const itemTop = ['mt-12', 'mt-4', 'mt-0', 'mt-0', 'mt-16'];

                            return(
                                index == 2 ? (
                                    <div className="w-2/6 mx-8"></div>
                                ):(
                                    <div className={`hero-element w-1/6 ${itemTop[index]}`}>
                                        <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100">
                                            <StaticImage
                                                src="https://lh3.googleusercontent.com/WTVf7YDXhBKR_Mr48EPvuEjsU4zvSGsHl2yBp0S2EHv-a3LT6JqMvEdzxIqWOCV0lS0LuskC429JKYGvMWtohM36qpeeHCeWvhfv=s0"
                                                aspectRatio={9/16}
                                                quality={100}
                                                formats={["auto", "webp", "avif"]}
                                                alt="Image of google stories"
                                                placeholder="blurred"
                                            />
                                        </div>
                                    </div>
                                )
                                
                            )
                        })
                    }
                </div>
            </div>

            <div className="h-screen">
                <div className="w-1/3 p-10">
                    <p className="text-xl tracking-tight text-white">The tappable story format has never been more accessible—to creators and readers alike. See what happens when Google brings stories to the open web.</p>
                </div>
            </div>

            <div className="h-screen" ref={textRef}>
                <div className="w-2/3 mx-auto flex justify-center items-center h-full">
                    <h3 className="text-center text-6xl font-bold">Visual stories that feel like yours, because they are.</h3>
                </div>
            </div>

        </div>

        <div className="text-center py-8">
            <Link to='/' className="link">Go to Home</Link>
        </div>
        
    </Layout>
  )
}

export default Showcase1
