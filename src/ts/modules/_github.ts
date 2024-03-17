import githubIcon from '../../../public/img/icon-github.svg';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

async function fetchRepositories(username: string): Promise<Repository[]> {
  const queryParam = '?sort=updated&direction=desc';
  const response = await fetch(`https://api.github.com/users/${username}/repos${queryParam}`);
  const data = await response.json();
  return data.map((repo: Repository) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
  }));
}

/**
 * GitHubリポジトリのリストを取得
 * @param username - GitHubユーザー名
 */
export async function displayRepositories(username: string) {
  try {
    const repositories = await fetchRepositories(username);
    const repoList = document.getElementById('js-repoList');
    if (repoList) {
      repositories.forEach((repo) => {
        const listItem = document.createElement('li');

        const link = document.createElement('a');
        link.href = repo.html_url;
        link.target = '_blank';

        const linkRightCol = document.createElement('div');
        linkRightCol.textContent = repo.name;

        const img = document.createElement('img');
        img.src = githubIcon;

        const description = document.createElement('p');
        description.textContent = repo.description || 'No description provided.';

        linkRightCol.appendChild(description);
        link.appendChild(img);
        link.appendChild(linkRightCol);
        listItem.appendChild(link);
        repoList.appendChild(listItem);
      });
    }
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
}
