export class User {
    constructor(
        public login: any,
        public avatar_url: any,
        public public_repos: any,
        public following: number,
        public followers: number,
        public email: any,
        public bio: any,
        public created_at: Date
      ) {}
}
