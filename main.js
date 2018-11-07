document.addEventListener('DOMContentLoaded', function(event) {
  console.log("It's Alive!")

// Initialize Materialize Elements
  M.AutoInit();

// FAB menu
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
  });

//Submit Button Action
    let submit = document.querySelector("#submit-button")
    let name = document.querySelector(".first-name")
    let form = document.querySelector("form")
    let remove = document.querySelector(".remove")
    let message = document.createElement("div")
    let ok = document.createElement("a")

    submit.addEventListener("click", function(event){
        event.preventDefault()
        remove.removeChild(form)

        message.setAttribute("class", "message-form")
        message.innerHTML = "Thank you for your inquiry! We will reach out soon."

        ok.setAttribute("class", "waves-effect ok-button waves-light btn-large orange darken-1 blue-grey-text hoverable")
        ok.innerHTML = "OK"

        remove.appendChild(message)
        // remove.appendChild(ok)

        ok.addEventListener("click", function(event){
          event.preventDefault()
          remove.appendChild(message)
          remove.appendChild(ok)
        })

        })


// Animate on Scroll
  AOS.init();

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

}) // DOMContentLoaded;
