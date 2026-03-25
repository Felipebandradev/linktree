export const linksArray = [
	{
		id: 1,
		foto: "não tem",
		link: "https://www.instagram.com/devfelipebarbosa/",
		titulo: "Instagram",
		descricao: "Um link muito maneiro",
		emoji: "📸",
	},
	{
		id: 2,
		foto: "",
		link: "https://github.com/Felipebandradev",
		titulo: "Github",
		descricao: "Um link muito maneiro",
		emoji: "📹",
	},
	{
		id: 3,
		foto: "",
		link: "https://www.linkedin.com/in/felipe-barbosa-brito/",
		titulo: "Linkedin",
		descricao: "Um link muito maneiro",
		emoji: "💼",
	},
	{
		id: 4,
		foto: "",
		link: "https://web.whatsapp.com/",
		titulo: "Whatsaap",
		descricao: "Um link muito maneiro",
		emoji: "🚀",
	},
];

const areaBotao = document.getElementById("ButtonArea");

linksArray.forEach((item) => {
	areaBotao.innerHTML += `
    
        	<section id="${item.id}" class="cardLink">
					<a href="${item.link}" target="_blank" >
					
						<button class="botao">
							<div id="CardFoto">
								<!-- Foto do ${item.titulo} -->
							</div>
							
							${item.emoji} ${item.titulo}

							<p class="descricaCard"> ${item.descricao} </p>
						</button>
						
					</a>
			</section>
    `;
});
