let ham = document.getElementById('hamburger').addEventListener('click', () => {
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('translate-x-0');
    navbar.classList.toggle('opacity-100');
});

function changeVariant(variant) {
const image = document.getElementById("variantImage");
const title = document.getElementById("variantTitle");
const description = document.getElementById("variantDescription");
const btnOriginal = document.getElementById("btnOriginal");
const btnPedas = document.getElementById("btnPedas");

if (variant === "original") {
    // Set Original variant details
    image.src = "/images/original.png";
    title.textContent = "BAKSO GORENG ORIGINAL";
    description.textContent = "Nikmati kelezatan bakso goreng klasik kami! Varian Original ini menghadirkan rasa autentik yang gurih dan nikmat, dengan perpaduan sempurna antara daging berkualitas dan bumbu tradisional. Tekstur luarnya yang renyah dan bagian dalam yang lembut akan memanjakan lidah Anda di setiap gigitan.";

    // Style for Original button
    btnOriginal.classList.add("bg-teal-500", "text-white");
    btnOriginal.classList.remove("bg-white", "text-black");

    // Style for Pedas button
    btnPedas.classList.add("bg-white", "text-black");
    btnPedas.classList.remove("bg-teal-500", "text-white");

} else if (variant === "pedas") {
    // Set Pedas variant details
    image.src = "/images/pedas.png";
    title.textContent = "BAKSO GORENG PEDAS";
    description.textContent = "Sensasi pedas yang menggugah selera! Varian Pedas ini cocok untuk kamu yang suka tantangan dengan cita rasa pedas yang pas dan menggoda.";

    // Style for Pedas button
    btnPedas.classList.add("bg-teal-500", "text-white");
    btnPedas.classList.remove("bg-white", "text-black");

    // Style for Original button
    btnOriginal.classList.add("bg-white", "text-black");
    btnOriginal.classList.remove("bg-teal-500", "text-white");
}
}
