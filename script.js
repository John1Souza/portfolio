const sect = document.getElementById("skills_showcase_wrapper");
		
		let skill_collection = ["HTML", "CSS", "Java Script", "React", "Java", "Spring", "MongoDB", "Postgress"]
		for(let i = 0; i < skill_collection.length;i++){
		
			const para = document.createElement("p");
			para.textContent = `${skill_collection[i]}`;
			sect.appendChild(para);
		
		}
		
		document.addEventListener('DOMContentLoaded', function() {
   			var apiUrl = 'https://api.github.com/users/John1Souza/repos?page=1&per_page=70'; // Substitua 'seu_usuario' pelo seu nome de usuário do GitHub
			let projects_collection = ["memory-game","projeto_login_riot","projeto-social", "projeto-cordel", "projeto-android", "projeto-web-site", "FlappyBird_Clone", "landing-page", "html-css-website-v1", "Super-Formul-rio"];
    			
			fetch(apiUrl)
       				.then(response => response.json())
        			.then(data => {
					var pagesRepos = data.filter(repo => {return repo.has_pages && projects_collection.includes(repo.name)}); // Filtra apenas os repositórios com GitHub Pages ativado
           				pagesRepos.forEach(repo => {
               					var repoContainer = document.getElementById('repos-container');
                				var repoElement = document.createElement('div');
                				repoElement.classList.add('repo');
                				repoElement.innerHTML = `
							<div class="zoom"><img class="projects-photo" src="./images/${repo.name}.webp" alt="projects photo"/></div>
                    					<h3>${repo.name}</h3>
                    					<p><strong>Descrição:</strong> ${repo.description}</p>
                    					<p><strong>Linguagem:</strong> ${repo.language}</p>
                    					<p><strong>URL:</strong> <a href="https://github.com/John1Souza/${repo.name}" target="_blank">${repo.name}</a></p>
			 				<p><strong>DEPLOY:</strong> <a href="https://John1Souza.github.io/${repo.name}/" target="_blank">${repo.name}</a></p>
                				`;
                				repoContainer.appendChild(repoElement);
            			});
        		})
        		.catch(error => {
            			console.error('Erro ao carregar repositórios do GitHub:', error);
        		});
		});	
