const words = ["Welcome", "to", "My","Web", "Portfolio!"];
        let index = 0;
        function typeEffect() 
        {
            if (index < words.length) 
            {
            document.getElementById("intro").innerHTML += words[index] + " ";
            index++;
            setTimeout(typeEffect, 600);
            }
        }
        window.onload = typeEffect;
        function toggleDarkMode() 
        {
            document.body.classList.toggle("dark-mode");
        }
        function validateForm() 
        {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message");

            if (name === "" || email === "") 
            {
                message.innerHTML = "Both fields are required!";
                message.style.color = "#D2665A";
                return false;
            }
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) 
            {
                message.innerHTML = "Invalid email format!";
                return false;
            }

            message.innerHTML = "Subscribed !";
            message.style.color = "#D2665A";
        }

        function toggleMenu() 
        {
            let navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function () {
                let navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
        