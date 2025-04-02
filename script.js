document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Functionality
    const nav = document.querySelector('nav');
    if (!nav) {
        console.error("Nav element not found!");
        return;
    }

    const navLinks = document.querySelector('nav ul');
    if (!navLinks) {
        console.error("Nav links (ul) not found!");
        return;
    }

    const navLinksItems = navLinks.querySelectorAll('a');
    if (!navLinksItems.length) {
        console.warn("No nav links found!");
    }

    // Create hamburger icon if it doesn't exist
    let hamburger = document.querySelector('.hamburger');
    if (!hamburger) {
        hamburger = document.createElement('div');
        hamburger.classList.add('hamburger');
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        nav.appendChild(hamburger);
        console.log("Hamburger icon created:", hamburger);
    } else {
        console.log("Hamburger icon already exists:", hamburger);
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        console.log("Hamburger toggled. Menu active:", navLinks.classList.contains('active'));
    });

    // Close menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            console.log("Menu closed after link click.");
        });
    });

    // Highlight Active Link Based on Current Page URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Get current page name (e.g., 'about.html')
    console.log("Current page:", currentPage); // Debugging
    navLinksItems.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
           console.log(`Active link set to: ${href}`); // Debugging
        }
    });

   // Smooth Scroll for In-Page Links (for future use, without affecting page-based active state)
    navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) { // Only apply to in-page links
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Update active state only for in-page links
                navLinksItems.forEach(item => {
                    if (item.getAttribute('href').startsWith('#')) {
                        item.classList.remove('active');
                    }
                });
                link.classList.add('active');
            }
        }
    });
    });

    // // Active Link Highlight Based on Scroll Position (for in-page sections, if applicable)
    // window.addEventListener('scroll', () => {
    //     const sections = document.querySelectorAll('section');
    //     const navHeight = document.querySelector('header').offsetHeight;

    //     sections.forEach(section => {
    //         const sectionTop = section.offsetTop - navHeight;
    //         const sectionBottom = sectionTop + section.offsetHeight;
    //         const scrollPosition = window.scrollY;

    //         if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    //             const sectionId = section.getAttribute('id');
    //             navLinksItems.forEach(link => {
    //                 link.classList.remove('active');
    //                 if (link.getAttribute('href') === `#${sectionId}`) {
    //                     link.classList.add('active');
    //                 }
    //             });
    //         }
    //     });
    // });

    // Form Validation (if present on the page)
    // const form = document.querySelector('.fill-earn form');
    // const fileInput = document.getElementById('fileUpload');

    // if (form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         const inputs = form.querySelectorAll('input, select, textarea');
    //         let isValid = true;

    //         inputs.forEach(input => {
    //             if (!input.value || (input.type === 'file' && !fileInput.files.length)) {
    //                 isValid = false;
    //                 input.style.borderColor = '#ff0000';
    //             } else {
    //                 input.style.borderColor = '#ccc';
    //             }
    //         });

    //         if (isValid) {
    //             alert('Form submitted successfully!');
    //             form.reset();
    //         } else {
    //             alert('Please fill all fields and upload a file.');
    //         }
    //     });

    //     const inputs = form.querySelectorAll('input, select, textarea');
    //     inputs.forEach(input => {
    //         input.addEventListener('input', () => {
    //             input.style.borderColor = '#ccc';
    //         });
    //     });
    // }
});

// Contact us


                function initMap() {
                    // Coordinates for a sample location (e.g., Nagpur, India)
                    const location = { lat: 21.1458, lng: 79.0882 };
                    const map = new google.maps.Map(document.getElementById("map"), {
                        center: location,
                        zoom: 12, // Adjust zoom level as needed
                    });
        
                    // Add a marker
                    new google.maps.Marker({
                        position: location,
                        map: map,
                        title: "Waste Recycle Office",
                    });
                }


// fronted to backend and server
// document.querySelector("form").addEventListener("submit", async function (event) {
//     event.preventDefault(); // Prevents default form submission

//     // Create a FormData object to hold the form values
//     const formData = new FormData();
//     formData.append("name", document.getElementById("name").value);
//     formData.append("phone", document.getElementById("phonenumber").value);
//     formData.append("wasteType", document.getElementById("waste-type1").value);
//     formData.append("recycleCompany", document.getElementById("comapany").value);
//     formData.append("address", document.getElementById("address1").value);
//     formData.append("companyCity", document.getElementById("comapanycity").value);

//     // Get file input
//     const fileInput = document.getElementById("fileUpload");
  

//     try {
//         // Send the form data to your Spring Boot API
//         const response = await fetch("http://localhost:8080/api/submit-form", {
//             method: "POST",
//             body: formData
//         });

//         if (response.ok) {
//             const result = await response.json();
//             alert("Form submitted successfully!");
//             console.log("Success:", result);
//         } else {
//             alert("Error submitting form.");
//             console.error("Error:", response.statusText);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         alert("Something went wrong!");
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phonenumber').value;
        const wasteType = document.getElementById('waste-type1').value;
        const recycleCompany = document.getElementById('comapany').value;
        const photo = document.getElementById('fileUpload').files[0];
        const address = document.getElementById('address1').value;
        const city = document.getElementById('comapanycity').value;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('phoneNumber', phoneNumber);
        formData.append('wasteType', wasteType);
        formData.append('recycleCompany', recycleCompany);
        formData.append('photo', photo);
        formData.append('address', address);
        formData.append('city', city);

        fetch('http://localhost:8080/api/submit', { // Replace with your Spring Boot API endpoint if different
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                return response.text(); // or response.json() if your API returns JSON
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            alert('Data submitted successfully: ' + data);
            form.reset(); // Clear the form after successful submission
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('Error submitting data. Please try again.');
        });
    });
});
