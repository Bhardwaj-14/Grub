const toggleButton = document.querySelector('nav button');
const navLinks = document.createElement('div');

navLinks.classList.add('mobile-menu', 'flex', 'flex-col', 'space-y-4', 'mt-4', 'md:hidden');
navLinks.innerHTML = `
    <a href="#home" class="hover:text-green-200">Home</a>
    <a href="#about" class="hover:text-green-200">About</a>
    <a href="#blog" class="hover:text-green-200">Blog</a>
    <a href="#tips" class="hover:text-green-200">Tips</a>
    <a href="#contact" class="hover:text-green-200">Contact</a>
`;

let isOpen = false;
toggleButton.addEventListener('click', () => {
    if (!isOpen) {
        toggleButton.parentNode.appendChild(navLinks);
    } else {
        navLinks.remove();
    }
    isOpen = !isOpen;
});
