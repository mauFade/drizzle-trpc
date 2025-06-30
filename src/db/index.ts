class Database implements UserActions {
  public userList(): User[] {
    return [
      {
        id: "1",
        name: "test",
      },
    ];
  }

  public userById(id: string): User | undefined {
    return [
      {
        id: "1",
        name: "test",
      },
    ].find((u) => u.id === id);
  }

  public userCreate(data: { name: string }): User {
    return {
      id: "1",
      name: data.name,
    };
  }
}

export const db = new Database();
