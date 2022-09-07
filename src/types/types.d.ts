export interface IUser {
  id: string;
  name: string;
  email: string;
  image: string;
  createdAt: string;
  lastAccess: string;
  isBlocked: boolean;
  Permissions?: [
    {
      Permission: {
        name: string;
      };
    },
  ];
}
