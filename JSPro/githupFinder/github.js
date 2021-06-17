class Github {
    constructor() {
        this.client_id = '0864cf0269f55f73f96e'; 
        this.client_secret = '9794ff3997f72037713134f06eb7237221177067'; 
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }


    async getUser(user) {
        const profileResponse = await 
                fetch( `https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret=${this.client_secret}`);
       
        const repoResponse = await 
        fetch( `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id= ${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await  profileResponse.json();
        const repos  = await  repoResponse.json();

        return {
            profile,
            repos
        }
    } 
}