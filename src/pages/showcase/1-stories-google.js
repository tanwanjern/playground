import React, { useEffect, useLayoutEffect, useRef } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { gsap } from "gsap";
import useWindowDimensions from "../../hooks/useWindowDimensions"
// import SplitText from "../../components/splitText"

// https://stories.google/
// TODO: Prevent running multiple times when resizing
// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
// TODO: Play video on scroll
// TODO: Feature components
// TODO: And more..

const Showcase1 = () => {

    const phoneRef = useRef(null);
    const captionRef = useRef(null);
    const storiesRef = useRef(null);

    const {width} = useWindowDimensions();

    useLayoutEffect(()=>{

        function intro(){
            const tl = gsap.timeline({
                delay: 0.5,
            }) 
            tl.fromTo(".hero-phone", {y: width < 768 ? 426:384}, {y: 8, duration: 1})
            tl.fromTo(".hero-story", {y: 300}, {y: 0, duration: 0.75, delay: function (index){
                return 0.2 * index
            }})
            tl.fromTo(".hero-headline .text", {opacity: 0, yPercent: 100}, {opacity: 1, yPercent:0, duration: 0.5, stagger: 0.05, ease: "SlowMo.easeOut"})
            // tl.from(".hero-headline .char", {
            //     duration: 0.5, opacity: 0, stagger: 0.05, y: 30, ease: "expo",
            // });
            return tl;
        }

        const scrollEnd =  width < 768 ? 300:800;
        function phoneAnimation(){
            const tl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: phoneRef.current,
                    start: "top top",
                    end: "+="+scrollEnd,
                    pin: true,
                    pinType: 'fixed',
                    scrub: true,
                    // markers: true
                }
            })
            tl.to(".hero", {
                backgroundColor: '#212225',
                duration: 0.25,
                ease: 'power1.in'
            }, "+=5")
            tl.to(".hero-phone", {scale: 0.8, duration: 6, ease: "circ.out"}, "+=2")

            return tl;
        }

        function backgroundAnimaton(){
            const tl2 = gsap.timeline({
                scrollTrigger:{
                    trigger: captionRef.current,
                    start: "top center",
                    scrub: true,
                    // markers: true
                }
            })
            tl2.to(".hero", {
                backgroundColor: 'white',
                duration: 0.5,
                ease: 'power1.out'
            }, "-=2")

            return tl2;
        }

        const master = gsap.timeline();

        if(width){
            master.add(intro());
            master.add(phoneAnimation());
            master.add(backgroundAnimaton());
            console.log(width)
        }

    }, [width])

    return(
        <Layout>
            <Seo title="Showcase 1 - Stories Google" />
            
            <div className="hero relative">

                <div className="mx-auto pt-24 pb-72 w-11/12 md:4/6 lg:w-3/6">
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
                        <h1 className="hero-headline text-5xl md:text-6xl text-center">
                            {/* <span className="font-bold">Stories</span> meet their widest audience ever */}
                            {/* <SplitText>Stories meet their widest audience ever </SplitText> */}
                            <div className="inline-block overflow-hidden">
                                <strong className="text inline-block" aria-hidden="true">Stories</strong>
                            </div>
                            <span className="inline-block">&nbsp;</span>
                            <div className="inline-block overflow-hidden">
                                <span className="text inline-block" aria-hidden="true">meet</span>
                            </div>
                            <span className="inline-block">&nbsp;</span>
                            <div className="inline-block overflow-hidden">
                                <span className="text inline-block" aria-hidden="true">their</span>
                            </div>
                            <span className="inline-block">&nbsp;</span>
                            <div className="inline-block overflow-hidden">
                                <span className="text inline-block" aria-hidden="true">widest</span>
                            </div>
                            <span className="inline-block">&nbsp;</span>
                            <div className="inline-block overflow-hidden">
                                <span className="text inline-block" aria-hidden="true">audience</span>
                            </div>
                            <span className="inline-block">&nbsp;</span>
                            <div className="inline-block overflow-hidden">
                                <span className="text inline-block" aria-hidden="true">ever</span>
                            </div>
                        </h1>
                    </div>
                </div>

                <div className="absolute top-[426px] md:top-96 left-0 w-full z-40" ref={phoneRef}>
                    <div className="hero-phone flex justify-center relative w-3/4 md:w-[380px] mx-auto">
                        <div className="w-full aspect-[9.3/20] bg-black rounded-[50px]"></div>
                        <div className="absolute top-[5%] right-0 left-0">
                            <video
                                className="w-[95%] h-[92.5%] mx-auto object-cover rounded-3xl overflow-hidden drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                                src="https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0"
                            />
                        </div>
                    </div>
                </div>
            
                <div className="h-screen md:h-auto md:pb-16"  ref={storiesRef}>
                    <div className="flex flex-row gap-4 -mx-4 md:mx-8">
                        {
                            Array(width < 768 ? 3:5).fill(0).map((item, index)=>{

                                const itemTop = ['mt-12', 'mt-4', 'mt-0', 'mt-0', 'mt-16'];

                                return(
                                    index === (width < 768 ? 1:2) ? (
                                        <div className="w-2/4 md:w-[380px] mx-8" key={"story"+index}></div>
                                    ):(
                                        <div className={`hero-story w-2/3 md:w-1/6 ${itemTop[index]}`} key={"story"+index}>
                                            <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100 translate-z-0">
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

                <div className="md:h-screen relative z-50 px-8">
                    <div className="md:flex items-center h-full justify-between">
                        <div className="w-full md:w-1/3 p-10 md:sticky top-0">
                            <p className="text-xl tracking-tight text-white">The tappable story format has never been more accessible—to creators and readers alike. See what happens when Google brings stories to the open web.</p>
                        </div>
                        <div className="w-full md:w-1/3 p-10 md:sticky top-0">
                            <p className="text-lg tracking-tight text-white mb-5">Making an impact at</p>
                            <div className="grid grid-cols-3 gap-4">
                                {
                                    Array(12).fill(0).map((item, index)=>{
                                        return(
                                            <StaticImage
                                                src="https://lh3.googleusercontent.com/-E3n3JJeXPS__QEqOHROLvz4jN-_-r7ND-O0Fil1xREJAQ68o7sq3ajoxQn1yEgtPEzuSowMBN_wTSs8vulGeZ5It4YBGtXvfz45Ng=s0"
                                                width={100}
                                                // aspectRatio={9/16}
                                                quality={100}
                                                formats={["auto", "webp", "avif"]}
                                                alt="Image of google stories"
                                                placeholder="blurred"
                                                key={"logo"+index}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:h-screen h-[500px] mb-24 md:mb-0" ref={captionRef}>
                    <div className="w-3/4 xl:w-2/4 mx-auto flex justify-center items-center h-full">
                        <h3 className="text-center text-4xl md:text-6xl font-bold">Visual stories that feel like yours, because they are.</h3>
                    </div>
                </div>

            </div>

            <div className="justify-center py-8 flex gap-4">
                <Link to='/' className="link">Go to Home</Link>
                <span className="text-gray-400">/</span>
                <Link to='https://stories.google/' className="link" target={"_blank"}>Visit live site</Link>
            </div>
        
        </Layout>
    )
}

export default Showcase1
