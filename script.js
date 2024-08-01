lucide.createIcons();



function openInNewTab(url) {
    window.open(url, '_blank');
}


//to smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




///TO MAKE CURSOR



const makeCursor = (xscale, yscale) => {


    let cursor = document.querySelector('#cursor')
    // Add an event listener for the 'mousemove' event
    window.addEventListener('mousemove', (dets) => {
        // 'dets' is the event object generated by the 'mousemove' event
        // 'dets.x' gives the horizontal coordinate of the mouse pointer
        // console.log(dets.x);
        // We subtract 10 to center the cursor
        cursor.style.left = (dets.x - 10) + 'px';
        cursor.style.top = (dets.y - 10) + 'px';
        cursor.style.transform = `scale(${xscale}, ${yscale})`;
    });
}
makeCursor()
















///TO MAKE ANIMATION IN NAVBAR and other 
let hover = document.querySelectorAll('.hover')
hover.forEach((elem) => {
    elem.addEventListener('mouseenter', () => {
        cursor.style.scale = 3
        cursor.style.border = '1px solid white'
        cursor.style.backgroundColor = 'transparent'
    })
    elem.addEventListener('mouseleave', () => {
        cursor.style.scale = 1
        cursor.style.border = '0'
        cursor.style.backgroundColor = '#fff'
    })
})











////to add gsap animations
const firstPageAnim = () => {
    var tl = gsap.timeline();

    tl.from('nav', {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to('.boundingelem', {
            y: '0',
            duration: 1.5,
            ease: Expo.easeInOut,
            delay: -1,
            stagger: 0.2
        })
        .from('.working', {
            y: '-10',
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
}
firstPageAnim()





























////to make the cursor chapta when we move




var timeout;

// Function to handle the custom cursor scaling effect
const circleChaptaKaro = () => {

    var xscale = 1; // Initial x-scale
    var yscale = 1; // Initial y-scale

    var xprev = 0; // Previous x-coordinate of the mouse
    var yprev = 0; // Previous y-coordinate of the mouse

    // Event listener for mouse movement
    window.addEventListener('mousemove', (dets) => {
        clearTimeout(timeout); // Clear any existing timeout to prevent multiple timeouts running

        // Calculate the difference in x and y coordinates from the previous positions
        let xdiff = dets.clientX - xprev;
        let ydiff = dets.clientY - yprev;

        // Clamp the scale values between 0.8 and 1.2 based on the differences
        xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

        // Update the previous positions to the current positions
        xprev = dets.clientX;
        yprev = dets.clientY;

        // Function to apply the scaling effect to the cursor
        makeCursor(xscale, yscale);

        // Select the cursor element
        let cursor = document.querySelector('#cursor');

        // Set a timeout to reset the cursor scale back to normal after 100ms
        timeout = setTimeout(() => {
            cursor.style.transform = `scale(1, 1)`;
        }, 100);
    });
}

// Call the function to initialize the custom cursor behavior
circleChaptaKaro();














///to make animation in #projects



/*
document.querySelectorAll('.elem').forEach((element)=>{
    var rotate = 0;
    var diffrot = 0;
    element.addEventListener('mouseleave',(details)=>{
       gsap.to(element.querySelector('img'), {
           opacity:0,
           duration:0.5
       })
    })
 element.addEventListener('mousemove',(details)=>{
   let diff =  details.clientY - element.getBoundingClientRect().top;
   diffrot = details.clientX - rotate
   rotate = details.clientX
    gsap.to(element.querySelector('img'), {
        opacity:1, 
        ease: Power3,
        top: diff,
        left: details.clientX-50,
        rotate: gsap.utils.clamp(-20,20, diffrot)
    })
 })
})*/





const hoverimg1 = () => {

    var rotate1 = 0;    // Initial rotation value
    var diffrot1 = 0;   // Difference in rotation value

    let elem1 = document.querySelector('.elem1');    // Select the element with class 'elem1'

    // Add event listener for 'mousemove' on elem1
    elem1.addEventListener('mousemove', (details) => {
        let diff1 = details.clientY - elem1.getBoundingClientRect().top; // Calculate the vertical distance from the top of elem1 to the mouse pointer
        diffrot1 = details.clientX - rotate1;    // Calculate the difference in the X coordinate
        rotate1 = details.clientX;               // Update the rotate1 to the current mouse X coordinate

        // Animate the image inside elem1 using gsap
        gsap.to(elem1.querySelector('img'), {
            opacity: 1,                          // Set opacity to 1 (visible)
            ease: Power3,                        // Use Power3 easing function
            top: diff1,                          // Set the top position to diff1
            left: details.clientX - 50,          // Set the left position to mouse X coordinate minus 50
            rotate: gsap.utils.clamp(-20, 20, diffrot1)  // Clamp the rotation between -20 and 20 degrees
        });
    });

    // Add event listener for 'mouseleave' on elem1
    elem1.addEventListener('mouseleave', (details) => {
        // Animate the image inside elem1 using gsap
        gsap.to(elem1.querySelector('img'), {
            opacity: 0,                          // Set opacity to 0 (invisible)
            duration: 0.5,                  // Duration of the animation
             top:0                           // Reset the top position to 0
                                         // Reset the left position to 0
        });
    });
}

// Call the function to initialize the hover effect
hoverimg1();











const hoverimg2 = () => {
    var rotate2 = 0;
    var diffrot2 = 0;

    let elem2 = document.querySelector('.elem2');
    elem2.addEventListener('mousemove', (details) => {
        let diff2 = details.clientY - elem2.getBoundingClientRect().top;
        diffrot2 = details.clientX - rotate2
        rotate2 = details.clientX
        gsap.to(elem2.querySelector('img'), {
            opacity: 1,
            ease: Power3,
            top: diff2,
            left: details.clientX - 50,
            rotate: gsap.utils.clamp(-20, 20, diffrot2)

        })
    })


    elem2.addEventListener('mouseleave', (details) => {
        gsap.to(elem2.querySelector('img'), {
            opacity: 0,
            duration: 0.5,
            top:0

        })
    })
}
hoverimg2()






const hoverimg3 = () => {

    var rotate3 = 0;
    var diffrot3 = 0;

    let elem3 = document.querySelector('.elem3');

    elem3.addEventListener('mousemove', (details) => {
        let diff3 = details.clientY - elem3.getBoundingClientRect().top;
        diffrot3 = details.clientX - rotate3
        rotate3 = details.clientX

        gsap.to(elem3.querySelector('img'), {
            opacity: 1,
            ease: Power3,
            top: diff3,
            left: details.clientX - 50,
            rotate: gsap.utils.clamp(-20, 20, diffrot3)

        })
    })
    elem3.addEventListener('mouseleave', (details) => {
        gsap.to(elem3.querySelector('img'), {
            opacity: 0,
            duration: 0.5,
            top:0

        })
    })

}
hoverimg3()
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
echo "# Qandeel-creative" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Rehmancodes1/Qandeel-creative.git
git push -u origin main







////to add click function in menu button----------------------------

const menu = document.getElementById('menu');

const openMenu = () => {
    menu.style.top = "0vh";
}
const closeMenu = () => {
    menu.style.top = "-100vh";
}
