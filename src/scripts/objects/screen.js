const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                    <img src="${user.avatarUrl} alt="Foto do perfil do usuário" />
                    <div class="data">
                        <h1>${user.name ?? 'Usuário não possui nome cadastrado'}</h1>
                        <p>${user.bio ?? 'Usuário não possui bio cadastrada'}</p>
                        <div style= "display:flex; margin-top:20px; justify-content: center; gap:5px">
                        <svg text="muted" aria-hidden="true" height="50" viewBox="0 0 16 16" version="1.1" width="50" data-view-component="true" class="octicon octicon-people">
    <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
</svg>
                    <div style="display:block">
                        <p>Following: ${user.following}</p>
                        <p>Followers: ${user.followers}</p>
                        </div>
                        </div>
                    </div>
                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank"><span class="repo-name">${repo.name}</span>
        <div style="margin-top:15px"><span class="infos-repo">🍴${repo.forks_count}</span><span class="infos-repo">⭐${repo.watchers_count}</span><span class="infos-repo">👀${repo.language}</span><span class="infos-repo">👩‍💻${repo.stargazers_count}</span></div></a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                           <h2>Repositórios</h2>
                                           <ul>${repositoriesItens}</ul>
                                           </div> `
        }
        console.log(user.repositories)

        let eventsItens = ''
        if (user.events.length === 0) {
            eventsItens = '<li><span>O usuário não possui eventos recentes</span></li>';
        } else {
            user.events.forEach(event => {
                if (event.type === 'PushEvent') {
                    eventsItens += `<li style="margin-top:5px"> <a href="https://github.com/${event.repo.name}" target="_blank" style="font-weight: 700"> ${event.repo.name} </a>
                                        <span style="font-weight:300">- ${event.payload.commits[0].message}</span>
                                    </li>`;
                } else if (event.type === 'CreateEvent') {
                    eventsItens += `<li style="margin-top:5px"> <a href="https://github.com/${event.repo.name}" target="_blank" style="font-weight: 700"> ${event.repo.name} </a>
                                        <span style="font-weight:300">- ${event.payload.description} </span>
                                    </li>`;
                }
            })
        }


        this.userProfile.innerHTML += `<div>
                                            <h3 style=" font-weight: 700; color: #3A3B3E">Eventos</h3>
                                            <ul style="font-size: 12px">${eventsItens}</ul>
                                       </div>`

    },
    renderNotFound() {
        this.userProfile.innerHTML = " <h3>Usuário não encontrado</h3>"
    }
}



export { screen }

