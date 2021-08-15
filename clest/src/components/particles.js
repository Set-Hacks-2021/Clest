import Particles from 'react-particles-js';
import { Collisions } from 'tsparticles/Options/Classes/Particles/Collisions/Collisions';
import "../styles/styles.scss";


// documentation https://www.npmjs.com/package/react-particles-js
// working example code https://codesandbox.io/s/4k5z9xx0w?file=/src/ParticleComponent.js:95-224

function ParticlesContainer({ children, height }) {
    const experimental = {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 1600
                }
            },
            color: {
                value: "#808080"
            },
            shape: {
                type: "circle",
                stroke: {
                width: 5,
                color: "#808080"
                },
                polygon: {
                    nb_sides: 3
                },
                image: {
                src: "img/github.svg",
                width: 100,
                height: 100
                }
            },
            opacity: {
                value: .5,
                random: false,
                anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.4,
                sync: false
                }
            },
            size: {
                value: 1.5,
                random: true,
                anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 200,
                color: "#808080",
                opacity: 1,
                width: 0.6
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                enable: true,
                mode: "bubble"
                },
                onclick: {
                enable: false,
                mode: "repulse"
                },
                resize: true
            },
            modes: {
                grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
                },
                bubble: {
                distance: 100,
                size: 10,
                duration: 2,
                opacity: 8,
                speed: 3
                },
                repulse: {
                distance: 1,
                duration: 40
                },
                push: {
                particles_nb: 4
                },
                remove: {
                particles_nb: 2
                }
            }
        },
        retina_detect: true,
        collisions:
          {
             enable: true
        }
    };

    const primary = {
        fps_limit: 28,
	    particles: {
	        collisions: {
	            enable: false
	        },
	        number: {
	            value: 200,
	            density: {
	                enable: false
	            }
	        },
	        line_linked: {
	            enable: true,
	            distance: 30,
	            opacity: 0.4
	        },
	        move: {
	            speed: 1
	        },
	        opacity: {
	            anim: {
	                enable: true,
	                opacity_min: 0.05,
	                speed: 1,
	                sync: false
	            },
	            value: 0.4
	        }
	    },
	    polygon: {
	        enable: true,
	        scale: 0.5,
	        type: "inline",
	        move: {
	            radius: 10
	        },
	        url: "small-deer.2a0425af.svg",
	        inline: {
	            arrangement: "equidistant"
	        },
	        draw: {
	            enable: true,
	            stroke: {
	                color: "rgba(255, 255, 255, .2)"
	            }
	        }
	    },
	    retina_detect: false,
	    interactivity: {
	        events: {
	            onhover: {
	                enable: true,
	                mode: "bubble"
	            }
	        },
	        modes: {
	            bubble: {
	                size: 6,
	                distance: 40
	            }
	        }
	    }
    };
    const secondary = {
        particles: {
	        number: {
	            value: 100,
                density: {
                    enable: true,
                    value_area: 1600
                },
	        },
	        size: {
	            value: 3
	        }
	    },  
	    interactivity: {
	        events: {
	            onhover: {
	                enable: true,
	                mode: "repulse"
	            }
	        }
	    }
        
	}
    

    
 
    console.log(height);
    return (
        <div className='column relative'>

            <Particles className='background' params={experimental} height={height}/>
            {children}
        </div>
    );

}
