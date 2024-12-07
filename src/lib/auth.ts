export async function login(username: string, password: string): Promise<boolean> {
    if (username === 'testuser' && password === 'password') {
      return true;
    }
    return false;
  }
  
  export async function getCurrentUser(): Promise<{username: string}|null> {
    return { username: 'testuser' };
  }
  
  export async function logout() {
  }
  