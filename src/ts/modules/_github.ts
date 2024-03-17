interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

async function fetchRepositories(username: string): Promise<Repository[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();
  return data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
  }));
}

async function displayRepositories(username: string) {
  try {
    const repositories = await fetchRepositories(username);
    const repoList = document.getElementById('repo-list');
    if (repoList) {
      repositories.forEach((repo) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = repo.html_url;
        link.textContent = repo.name;
        listItem.appendChild(link);
        repoList.appendChild(listItem);
      });
    } else {
      console.error('No element with id "repo-list" found');
    }
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
}

// 使用例
displayRepositories('your-github-username');
